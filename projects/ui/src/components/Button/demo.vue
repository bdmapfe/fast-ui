<template>
    <div class="button-container">
        <h4>常规表单提交按钮</h4>
        <bottom-btn v-model="isShowButton" :type="'dialog-one-btn'" :btn-color="btnColor" :press-color="pressColor">同意，报价并领取礼包</bottom-btn>
        <h4></h4>
        <bottom-btn v-model="isShowButton" :type="'dialog-one-btn'" :btn-color="btnColor" :disabled="true">同意，报价并领取礼包(disabled)</bottom-btn>
        <h4>常规任务按钮</h4>
        <bottom-btn v-model="isShowButton" :type="'task-btn'" :btn-color="btnColor" :disabled="true">敬请期待</bottom-btn>
        <bottom-btn v-model="isShowButton" :type="'task-btn'" :btn-color="btnColor">再次购险</bottom-btn>
        <h4>权益按钮</h4>
        <bottom-btn v-model="isShowButton" :type="'btn-get'" :btn-color="btnColor">立即领取</bottom-btn>
        <bottom-btn v-model="isShowButton" :type="'btn-get'" :btn-color="btnColor">去查看</bottom-btn>
        <bottom-btn v-model="isShowButton" :type="'btn-get'" :btn-color="btnColor" :disabled="true">已过期</bottom-btn>
        <h4 class="poa">吸底表单提交按钮</h4>
        <bottom-btn v-model="isShowButton" :btn-color="btnColor">同意，报价并领取礼包</bottom-btn>
    </div>
</template>

<script>
    import Button from './Button'
    export default {
        name: "Button.demo.vue",
        components: {
            'bottom-btn': Button
        },
        data() {
            return {
                isShowButton: true,
                btnColor: '#3385ff',
                pressColor: '#326ee4'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button-container {
        .poa {
            position: absolute;
            bottom: 100px;
        }
    }
</style>