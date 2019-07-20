/**
 * @file 项目编译产出配置
 *
 */
const fs = require('fs');
const spawn = require('child_process').spawn;
// 3-1 目前支持的模块名数组，主要是根据projects目录下的文件夹的名字来确定，common是基础库，不作为项目产出
let files = fs.readdirSync('./projects');
// console.log(files);
let modules = [];
files.forEach(filename => {
    // 过滤掉common项目和非项目文件
    if (filename !== 'common' && (!/^\./.test(filename))) {
        modules.push(filename);
    }
});
// console.log(modules);

// 3-2 获取产出模块 取出npm命令中的模块参数 npm run serve legal
// console.log(process.argv);
const npmArgs = process.argv.splice(2);
let moduleName = npmArgs[0];
// 3-2-1 remote模式下，需要取出remote对应的地址 npm run serve-remote legal RD_NAME
if (npmArgs.length > 1) {
    process.env.SUPPORT_REMOTE_ADDRESS = npmArgs[1];
}

// 3-3 处理指定模块, 默认处理所有模块
modules = (moduleName && moduleName !== 'all') ? [moduleName] : modules;
console.log('支持产出的模块名：' + modules);
for (let module of  modules) {
    // console.log(module);
    // 根据产出模块，设置vue.conf.js的路径
    process.env.VUE_CLI_SERVICE_CONFIG_PATH = __dirname + '/projects/' + module + '/vue.config.js';
    // console.log(process.env.VUE_CLI_SERVICE_CONFIG_PATH);
    // 获取产出环境 && 执行相应的shell命令
    let cmdStr = process.env.NODE_ENV === 'production' ? 'build-real'
        : process.env.NODE_ENV === 'test' ? 'test-real' : 'serve-real';
    // 对构建目标是lib的模块进行特殊处理
    if (process.env.npm_package_libconfig_module === module && process.env.NODE_ENV !== 'test') {
        cmdStr = 'build-ui';
    }
    process.env.MODULE_NAME = module;
    // spawn的使用规则参考：https://juejin.im/post/5a996a87f265da239d48bebc
    let child = spawn('npm', ['run', cmdStr], {
        // stdio是一个数组，用来设置标准输入，标准输出，错误输出；pipe：父进程和子进程之间建立一个管道
        stdio: ['pipe', 'pipe', 'pipe'],
        // 子进程工作目录
        cwd: __dirname,
        // 环境变量
        env: process.env,
        // 如果为true，当父进程不存在时也可以独立存在
        detached: true
    });
    child.stdout.on('data', data => {
        console.log(data.toString());
    });
    child.stderr.on('data', data => {
        console.log(data.toString());
    });
}


