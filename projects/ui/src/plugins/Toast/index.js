/**
 * @file Toast插件
 * @author huangwenming
 */
import Toast from './Toast.vue';

const _TOAST = {
    show: false,
    component: null
};

export default {
    install(Vue) {
        // 添加实例方法
        Vue.prototype.$toast = (text, options) => {
            if (_TOAST.show) {
                return;
            }
            if (!_TOAST.component) {
                let ToastComponent = Vue.extend(Toast);
                _TOAST.component = new ToastComponent();
                let element = _TOAST.component.$mount().$el;
                document.body.appendChild(element);
            }
            _TOAST.component.duration = options.duration;
            _TOAST.component.text = text;
            _TOAST.component.show = _TOAST.show = true;
            setTimeout(() => {
                _TOAST.component.show = _TOAST.show = false;
            }, options.duration);
        };
    }
};
