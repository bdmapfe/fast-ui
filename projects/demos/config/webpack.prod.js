/**
 * @file production环境下webpack配置文件
 * 注意：由于webpack的编译是在fast-ui-lib目录下执行，所以相对路径的使用需要注意，相对的是fast-ui-lib目录，而不是demos目录
 * 产出文件目录：demos/dist
 * 配置参考文档：https://cli.vuejs.org/zh/config/#pages或者https://cli.vuejs.org/config/#global-cli-config
 **/

const path = require('path');
const defaultsDeep = require('lodash.defaultsdeep');
const config = require('./index.js');
const commonConfig = require('../../../vue.config.js');
// 插件：将webpack产出的文件上传到指定的位置
const WebpackUploadPlugin = require('webpack-upload');

const assetsPublicPath = process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath : config.dev.assetsPublicPath;
const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;

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
                test: /\.(js|html|png|jpe?g|gif|svg|css|map)$/
            })
        );
    }
}

let projectConfig = {
    // 在 multi-page 模式下构建应用
    pages: config.entries,
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录(demos/dist目录下)
    outputDir: config.build.assetsRoot,
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/
    publicPath: assetsPublicPath,
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: assetsSubDirectory,
    configureWebpack: config => {
        return {
            output: {
                // 产出目录
                // path: config.build.assetsRoot,
                // 产出文件名
                filename: path.join(assetsSubDirectory, 'js/[name].[hash].js'),
                // 使用code-split产出的chunk文件名
                chunkFilename: path.join(assetsSubDirectory, 'js/[id].[chunkhash].js')
                // 访问路径设置
                // publicPath: assetsPublicPath
            },
            // 文件处理相关: 处理模块文件
            resolve: {
                // 取代1.0中的root,fallback,moduleDirectories字段，指定模块文件查找的文件目录
                // 支持相对目录和绝对目录，相对目录支持类似Node加载模块的冒泡查找
                modules: [
                    'node_modules',
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../../common'),
                    path.resolve('./node_modules/@vue/cli-service/node_modules')
                ],
                // 处理模块文件后缀自动补全
                extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
                // 路径alias：例如import @/services/a.js，会自动寻找 src/services/a.js
                alias: {
                    '@': path.resolve(__dirname, '../src'),
                    '@ui': path.resolve(__dirname, '../../ui'),
                    'vue$': 'vue/dist/vue.esm.js'
                }
            },
            resolveLoader: {
                modules: [
                    'node_modules',
                    path.resolve(__dirname, '../node_modules'),
                    path.resolve('./node_modules'),
                    path.resolve('./node_modules/@vue/cli-plugin-eslint/node_modules'),
                    path.resolve('./node_modules/@vue/cli-plugin-babel/node_modules'),
                    path.resolve('./node_modules/@vue/cli-service/node_modules')
                ]
            },
            plugins,
            optimization: {
                splitChunks: {
                    chunks: 'initial',
                    cacheGroups: {
                        vendor: {
                            name: 'vendor',
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'initial',
                            priority: 10,
                            minChunks: 1
                        },
                        common: {
                            name: 'common',
                            chunks: 'initial',
                            priority: 2,
                            minChunks: 1,
                        }
                    }
                }
            }
        };
    },
    // 链式操作修改webpack配置，操作文档https://github.com/neutrinojs/webpack-chain/tree/v4
    chainWebpack: config => {
        // 首先将commonConfig中的chainWebpack配置merge到具体项目中
        commonConfig.chainWebpack && commonConfig.chainWebpack.call(projectConfig, config);
        config.module.rule('images').use('url-loader').loader('url-loader')
            .tap(options => {
                // 修改它的选项...
                options.fallback = {
                    loader: 'file-loader',
                    options: {
                        // 图片的产出目录是相对于dist而言的
                        name: 'static/img/[name].[hash:8].[ext]',
                        // 使用publicPath，为了解决css中对图片的引用，是相对于产出后的css的路径的
                        publicPath: assetsPublicPath
                    }
                };
                return options;
            });
    }
};
let resultConfig = defaultsDeep(projectConfig, commonConfig);
module.exports = resultConfig;
