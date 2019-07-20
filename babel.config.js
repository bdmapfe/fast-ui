/**
 * @file babel设置文件
 * @type {{presets: string[]}}
 */
// 引入@babel/plugin-proposal-export-default-from，支持export v from 'mod'用法
const plugins = [
    '@babel/plugin-proposal-export-default-from'
];
if (['production', 'prod'].includes(process.env.NODE_ENV)) {
    plugins.push('transform-remove-console');
}
// test:unit 引入单元测试覆盖率插件
// process.env.NODE_ENV === 'test' && (plugins.push('babel-plugin-istanbul'));
module.exports = {
    presets: ['@vue/app'],
    plugins
};
