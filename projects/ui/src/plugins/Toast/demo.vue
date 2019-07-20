<template>
    <div class="app-container">
        <div class="test-item" @click="firePlugin">Toast</div>
    </div>
</template>

<script>
    import Vue from  'vue';
    import Toast from  './index.js';
    Vue.use(Toast);
    export default {
        name: "Toast.demo.vue",
        data() {
            return {}
        },
        methods: {
            firePlugin() {
                this.$toast('我是toast', {duration: 3000});
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
