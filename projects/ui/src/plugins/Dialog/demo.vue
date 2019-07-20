<template>
    <div class="app-container">
        <div class="test-item" @click="firePlugin">Dialog</div>
    </div>
</template>

<script>
    import Vue from  'vue';
    import Dialog from  './index.js';
    Vue.use(Dialog);
    export default {
        name: "Dialog.demo.vue",
        data() {
            return {}
        },
        methods: {
            firePlugin() {
                this.$dialog({
                    title: '对话框',
                    desc: '我是对话框',
                    onConfirm: ()=> {
                        console.log('确认按钮被点击');
                    },
                    onCancel: ()=> {
                        console.log('取消按钮被点击');
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .test-item {
        background-color: #fff;
        height: 80px;
        font-size: 32px;
        line-height: 80px;
        text-align: center;
        margin-bottom: 10px;
    }
</style>
