import packageInfo from '../config/package.js';
import { version } from '../../../package.json';
// 引入Vue UI组件
import Notice from '../src/components/Notice/Notice.vue';
import Scroll from '../src/components/Scroll/Scroll.vue';
import Select from '../src/components/Select/Select.vue';

// 引入Vue UI指令
import changesvgcolor from '../src/directives/changesvgcolor/index.js';

// 引入Vue UI插件
import Dialog from '../src/plugins/Dialog/index.js';
import Toast from '../src/plugins/Toast/index.js';

export default {
    packageInfo,
    version,
    Notice,
    Scroll,
    Select,

    changesvgcolor,

    Dialog,
    Toast
}
