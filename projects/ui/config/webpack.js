const path = require('path');
const defaultsDeep = require('lodash.defaultsdeep');
const commonConfig = require('../../../vue.config.js');
const config = require('./index.js');
// 插件：将webpack产出的文件上传到指定的位置
const WebpackUploadPlugin = require('webpack-upload');

// 加入远程发布的配置
// 判断是否支持远程发送
let plugins = [];
if (process.env.SUPPORT_REMOTE) {
    const remotes = config.remote;
    const address = process.env.SUPPORT_REMOTE_ADDRESS || 'huangwenming';
    if (remotes[address] && remotes[address].receiver) {
        plugins.push(
            new WebpackUploadPlugin({
                // 上传服务接口，插件会把文件逐个post到上传服务
                receiver: remotes[address].receiver,
                to: remotes[address].address,
                test: /\.(js|html|png|jpe?g|gif|svg|css)$/
            })
        );
    }
}

let projectConfig = {
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录(demos/dist目录下)
    outputDir: config.build.assetsRoot,
    configureWebpack: {
        entry: path.resolve(__dirname, '../src/index.js'),
        output: {
            libraryExport: 'default'
        },
        resolve: {
            // 路径alias：例如import @/services/a.js，会自动寻找 src/services/a.js
            alias: {
                '@': path.resolve(__dirname, '../src'),
                '@ui': path.resolve(__dirname, '../../ui'),
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        plugins
    },
    chainWebpack: config => {
        // 首先将commonConfig中的chainWebpack配置merge到具体项目中
        commonConfig.chainWebpack && commonConfig.chainWebpack.call(projectConfig, config);
    }
};

let resultConfig = defaultsDeep(projectConfig, commonConfig);
module.exports = resultConfig;
