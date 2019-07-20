/**
 * @file Dialog插件
 * @author huangwenming
 */
import Dialog from './Dialog.vue';

const _DIALOG = {
    show: false,
    component: null
};

export default {
    install(Vue) {
        // 添加实例方法
        Vue.prototype.$dialog = options => {
            if (_DIALOG.show) {
                return;
            }
            if (!_DIALOG.component) {
                const DialogComponent = Vue.extend(Dialog);
                _DIALOG.component = new DialogComponent();
                let element = _DIALOG.component.$mount().$el;
                document.body.appendChild(element);
            }
            // 属性赋值
            options.title && (_DIALOG.component.title = options.title);
            options.detail && (_DIALOG.component.title = options.detail);
            _DIALOG.component.show = _DIALOG.show = true;
            // 改写onConfirm和onCancel，控制组件的显示和隐藏
            _DIALOG.component.onConfirm = ()=> {
                options.onConfirm && options.onConfirm();
                _DIALOG.component.show = _DIALOG.show = false;
            };
            _DIALOG.component.onCancel = ()=> {
                options.onCancel && options.onCancel();
                _DIALOG.component.show = _DIALOG.show = false;
            };
        };
    }
};
