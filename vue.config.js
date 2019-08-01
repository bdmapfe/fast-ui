/**
 * @file vue.config.js文件，主要用于配置webpack
 * @type {{configureWebpack: module.exports.configureWebpack}}
 * 配置文件中的相对路径的basePath：vue.config.js的绝对路径
 */
module.exports = {
    // history模式下需要设置historyApiFallback进行转发，避免404报错
    devServer: {
        historyApiFallback: {
            verbose: true,
            rewrites: [{
                from: /^\/.*\.html/,
                to: context => {
                    return context.match[0];
                }
            }]
        }
    },
    // 希望babel编译的依赖，默认不编译node_module
    transpileDependencies: [],
    // transpileDependencies: ['node_modules'],
    // 简单修改webpack，可直接修改，可返回对象
    configureWebpack: config => {
        // console.log(config);
    },
    lintOnSave: false,
    // 链式操作修改webpack配置，操作文档https://github.com/neutrinojs/webpack-chain/tree/v4
    chainWebpack: config => {
        // console.log(config);
        /*config.module.rule('eslint')
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap(options => {
                options.emitWarning = false;
                return options
            });*/
        config
            .plugin('define')
            .tap(args => {
                args[0]['process.env'] = {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    SUPPORT_DEBUG: JSON.stringify(process.env.SUPPORT_DEBUG),
                };
                return args;
            });
        // 对vue文件中引入的md模块进行处理
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true
            });
        // 引入css主题样式文件
        config.module.rule('scss')
            .oneOf('vue-modules')
            .use('sass-loader')
            .loader('sass-loader')
            .tap(options => {
                // 修改主题样式，可以引入自定义的样式文件
                // data: `@import "PATH_CUSTOM_SCSS/custom.scss"; @import "@ui/libs/css/public.scss"; `,
                options.data = `@import "@ui/libs/css/public.scss";`;
                return options
            });
        // 解决css中calc()兼容问题，配置参考：https://segmentfault.com/a/1190000016034968
        // 参考：https://github.com/cssnano/cssnano/issues/578#issuecomment-430014825
        if (process.env.NODE_ENV === 'production') {
            config.plugin('optimize-css')
                .tap(([{ cssnanoOptions, ...args }]) => {
                    const preset = cssnanoOptions.preset || []
                    preset.forEach(item => {
                        if (typeof item === 'object') {
                            item.calc = false;
                        }
                    });
                    cssnanoOptions.preset = preset;
                    return [{ cssnanoOptions, ...args }]
                });
        }
    }
};
