const fs = require('fs');
const nodeFilelist = require('node-filelist');
const path = require('path');

class MdToVue {
    constructor(options) {
        let defaultOptions = {
            template: path.resolve(__dirname, './template.vue'),
            tplMdMark: '@/assets/ApiDocument.md',
            mdFilesDirs: '',
            vueFilesDir: ''
        };
        this.options = Object.assign(defaultOptions, options);

        if (this.options.mdFilesDirs && this.options.vueFilesDir) {
            this.changeMdToVue();
        }
    }
    apply() {}
    changeMdToVue() {
        // 查找指定目录下的.md文件 && 读取template文件
        Promise.all([this.findFiles(this.options.mdFilesDirs, {ext: 'md'}),
            this.readFile(this.options.template)])
            .then((resultArray) => {
                // 进行地址替换生成.vue文件
                resultArray[0].forEach(item => {
                    // console.log(item.path);
                    const mdFileShortPath = item.path.split(this.options.mdPathReplace)[1];
                    const mdSourceInVue = this.options.mdSourceInVue + mdFileShortPath;
                    // console.log(mdSourceInVue);
                    const shortPathSplits = mdFileShortPath.split('/');
                    const vueFileName = shortPathSplits[shortPathSplits.length - 2];
                    // console.log(vueFileName);
                    const vueFilePath = this.options.vueFilesDir + '/' + vueFileName + '.vue';
                    // console.log(vueFilePath);
                    const vueContext = resultArray[1].replace(this.options.tplMdMark, mdSourceInVue);
                    fs.writeFile(vueFilePath, vueContext, 'utf8', (err, res) => {});
                });

            });


    }
    findFiles(paths, options) {
        return new Promise((resolve, reject)=> {
            nodeFilelist.read(paths, options, (results) => {
                resolve(results);
            });
        })
    }
    readFile(path) {
        return new Promise((resolve, reject)=> {
            fs.readFile(path, 'utf-8', (err, data) => {
                resolve(data);
            });
        })
    }
}

/*new MdToVue({
    mdFilesDirs: [path.resolve(__dirname, '../../../ui/src/components/'),
        path.resolve(__dirname, '../../../ui/src/directives/'),
        path.resolve(__dirname, '../../../ui/src/plugins/')],
    vueFilesDir: path.resolve(__dirname, '../../src/views/'),
    mdSourceInVue: '@ui/src/',
    mdPathReplace: 'ui/src/'
});*/

module.exports = MdToVue;
