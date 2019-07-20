import Vue from 'vue';

import App from './app.vue';
import router from './router';

import lib from '@/libs/js/flexible.debug.js';
import fastUI from '@ui/src/index.js';


const main = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
