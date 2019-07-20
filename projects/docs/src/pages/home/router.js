import Vue from 'vue';
import VueRouter from 'vue-router';

import uiConfig from '@ui/config/package.js';
const Index = () => import('@/views/index.vue');

Vue.use(VueRouter);
const routes = [
    {
        path: '*',
        redirect: '/index'
    },
    {
        name:'index',
        path: '/index',
        component: Index
    },
];
uiConfig.categories.map((category)=>{
    const lists = category.list;
    lists.map((item)=>{
        if (item.hasDoc === false) return;
        routes.push({
            path: '/' + item.name,
            component: () => import('@/views/' + item.name+ '.vue'),
            name: item.name
        });
    });
});
const router = new VueRouter({
    mode: 'history',
    // history模式下/表示根目录，需要设置base root
    base: '/docs/home.html',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.path === '/index') {
            return null;
        }
        else {
            return { x: 0, y: 0 }
        }
    }
});

export default router;
