/**
 * @file postcss插件配置文件
 * @type {{plugins: {autoprefixer: {remove: boolean}, "postcss-px2rem": {remUnit: number}}}}
 */
module.exports = {
    plugins: {
        // to edit target browsers: use 'browserlist' field in package.json
        'autoprefixer': {remove: false},
        'postcss-px2rem': {remUnit: 75}
    }
};
