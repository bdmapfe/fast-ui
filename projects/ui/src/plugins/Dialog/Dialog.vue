<template>
    <div class="confirm-dialog" v-show="show">
        <div class="confirm-content">
            <div class="content-container">
                <div class="ico ico-cry"></div>
                <div class="ico ico-smile"></div>
                <div class="confirm-title">{{title}}</div>
                <div class="confirm-desc">
                    <p>{{detail}}</p>
                </div>
            </div>
            <div class="two-btn-container">
                <span class="btn left-btn cancel-btn" @click="eventHandler" data-label="cancel">取消</span>
                <span class="btn right-btn sure-btn" @click="eventHandler" data-label="sure">确定</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        data() {
            return {
                show: false,
                title: '对话框',
                detail: '对话框内容',
                onConfirm: ()=>{},
                onCancel: ()=>{}
            }
        },
        methods: {
            eventHandler(event) {
                const target = event.target;
                const btnLabel = target.getAttribute('data-label');
                if (btnLabel === 'sure') {
                    this.onConfirm();
                }
                if (btnLabel === 'cancel') {
                    this.onCancel();
                }
            }
        }
    }
</script>

<style scoped>
    .confirm-dialog {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
    }
    .confirm-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 5px;
        width: 500px;
        text-align: center;
    }
    .content-container {
        padding: 40px;
    }
    .confirm-title {
        font-size: 36px;
        text-align: center;
    }
    .confirm-desc {
        padding-top: 28px;
    }
    .confirm-desc p {
        font-size: 28px;
        line-height: 32px;
        color: #333;
    }
    .confirm-desc span {
        color: #1ca1ff;
    }
    .two-btn-container {
        height: 84px;
        width: 100%;
        display: flex;
    }
    .left-btn, .right-btn {
        flex: 1;
        line-height: 84px;
        text-align: center;
        display: block;
        width: 50%;
    }
    .cancel-btn {
        background-color: #f4f4f4;
        color: #333;
        font-size: 28px;
    }
    .sure-btn {
        background-color: #3385ff;
        color: #fff;
        font-size: 28px;
    }
</style>
