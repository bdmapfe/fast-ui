/**
 * @file
 * @desc vue+webpack项目配置文件，具体参见http://vuejs-templates.github.io/webpack
 */

const path = require('path');
module.exports = {
    build: {
        env: {
            NODE_ENV: "production"
        },
        // 编译输出的静态资源路径
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 编译输出的二级目录
        assetsSubDirectory: 'static',
        // 产出对外访问路径，实际访问目录为join(assetsPublicPath, assetsSubDirectory)
        assetsPublicPath: '/fastui/',
        // 是否开启 SourceMap，production下不建议开启，开启后影响包的大小
        productionSourceMap: true,
        // 是否对输出的文件开启Gzip压缩
        // 使用该插件需要单据安装：npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        // 压缩的输出文件类型为：js和css文件
        productionGzipExtensions: ['js', 'css'],
        // 查看产出文件bundle中所依赖依赖的模块分析，开启的方式通过命令行参数，默认开始8888端口
        // 需要单独安装：npm install --save-dev webpack-bundle-analyzer
        // `npm run build --report`
        // 主要查看一下模块占用的包体积，提取出占比较大的模块，进行优化
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: {
            NODE_ENV: 'development'
        },
        port: 8086,
        // 是否在首次编译成功后，打开浏览器
        autoOpenBrowser: true,
        // 编译产出在dist下的路径
        assetsSubDirectory: 'static',
        // 产出对外访问路径，实际访问目录为join(assetsPublicPath, assetsSubDirectory)
        assetsPublicPath: '/fastui/',
        // 代理配置：具体参考https://github.com/chimurai/http-proxy-middleware
        proxyTable: {
            '/custom-api': 'http://www.baidu.com',
            '/another-api': {
                target: 'http://www.baidu.com'
            }
        },
        // CSS Sourcemaps不开启，因为dev模式下css不作为模块单独提取
        // 具体参考https://github.com/webpack/css-loader#sourcemaps
        cssSourceMap: false
    },
    test: {
        env: {
            NODE_ENV: 'testing'
        }
    },
    // 远程部署开发机地址
    remote: {
        huangwenming: {
            // receiver: 'http://10.64.17.76:8999/receiver',
            receiver: 'http://yq01-mapcarowner-rddev-fe01.epc.baidu.com:8999/receiver',
            // 8096
            address: '/home/users/huangwenming/hwm/htdocs/fastui'
        }
    }
};
