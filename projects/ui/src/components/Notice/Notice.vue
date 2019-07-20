<template>
    <div class="notice-item" :class="{'animation-disappear': showAnimation}" v-show="visible">
        <span class="type">{{data.type}}</span>
        <div class="title" @click="clickHandler">{{data.title}}</div>
        <div class="close" @click="close"></div>
    </div>
</template>

<script>
    export default {
        name: 'Notice',
        props: ['isShow', 'data'],
        data() {
            return {
                showAnimation: false
            }
        },
        computed: {
            visible() {
                return this.isShow;
            }
        },
        methods: {
            close() {
                // 动画500毫秒后完成，此时关闭提醒条
                this.showAnimation = true;
                setTimeout(()=> {
                    this.$emit('close-notice');
                }, 500);

            },
            clickHandler() {
                this.$emit('notice-click');
                if (this.data.url) {
                    location.href = this.data.url;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../libs/css/public.scss";
    .notice-item {
        overflow: hidden;
        padding: 0 $padding-content-LR;
        height: $height-cell-one-line;
        background-color: $card-color-bg;
        @include flex-center();
    }
    .notice-item .type {
        width: 60px;
        padding: 4px 0 4px 0;
        color: $assist-red-color;
        font-size: 20px;
        text-align: center;
        border: 1px solid $assist-red-color; /* no */
        border-radius: 6px;
    }
    .notice-item .title {
        flex: 1;
        color: $text-color-senior;
        font-size: $font-size-normal;
        padding-left: $margin-between-text-icon;
        @include text-ellipsis();
    }
    .notice-item .close {
        width: 30px;
        height: 30px;
        background: url("../../assets/images/close-gray.png") no-repeat;
        background-size: 30px 30px;
    }
    .animation-disappear {
        animation: disappear-line 0.5s linear 0s;
    }
    @keyframes disappear-line {
        0% {
            height: $height-cell-one-line;
        }
        100% {
            height: 0;
        }
    }
</style>
