/**
 * @file vue.config.js文件，主要用于配置webpack
 * @type {{pages, outputDir, publicPath, assetsDir, configureWebpack}|*}
 * 配置文件中的相对路径的basePath：vue.config.js的绝对路径
 * 查看webpack配置项详情：切换到infoPage目录下，然后执行命令vue inspect > output.js，打开output.js文件即可
 */
const devConfig = require('./config/webpack.dev.js');
const prodConfig = require('./config/webpack.prod.js');

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
