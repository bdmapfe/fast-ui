<template>
    <div :class="{'btn-container': type === 'one-btn', 'dialog-one-btn': type === 'dialog-one-btn', 'task-btn': type === 'task-btn', 'btn-get': type === 'btn-get'}"  @click="getMsg" @touchstart="pressTrue" @touchend="getMsg">
        <span class="btn" :class="[{press : press},{'disable' : disabled}]" :style="{backgroundColor:changePressColor}"><slot></slot></span>
    </div>
</template>
<script>
    export default{
        data() {    
            return {
                press: false
            }
        },
        props:{
            type: {
                default: 'one-btn'
            },
            disabled: {
                default: false
            },
            btnColor: {
                default: '#3385ff'
            },
            pressColor: {
                default: '#326ee4'
            }
        },
        methods:{
            getMsg () {
                this.press = false;
                this.$emit('getMsg');

            },
            pressTrue(event) {
                if (!this.disabled) {
                    event.preventDefault();
                    this.press = true;
                }
            }
        },
        computed: {
            changePressColor() {
                if (this.press) {
                    return this.pressColor
                } else {
                    return this.btnColor
                }

            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../libs/css/public.scss";
    .btn-container {
        margin-top: $margin-senior;
        width: 100%;
        line-height: 98px;
        color: $btn-bg-color-white;
        box-sizing: border-box;
        position: absolute;
        padding:15px $padding-content-LR 0 $padding-content-LR;
        bottom: 0;
        background-color: $btn-bg-color-white;
        border-top: 1px solid $general-black-five;
        height: 130px;
        @include flex-center;
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
        .btn {
            margin-bottom: 15px;
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: $font-size-senior;
            background-color: $btn-primary-bg-color;
            height: 96px;
            line-height: 96px;
            border-radius: 48px;
            &.disable {
                opacity: 0.3;
            }
            &.press{
                background-color: #326ee4;
                color: rgba(255,255,255,0.5);
            }
        }
    }
    .dialog-one-btn {
        .btn {
            @include flex-center;
            width: 624px;
            height: 86px;
            background-color: $btn-primary-bg-color;
            border-radius: 43px;
            text-align: center;
            line-height: 86px;
            font-size: $font-size-normal;
            color: $btn-bg-color-white;
            margin: 0 auto;
            &.disable {
                opacity: 0.3;
            }
            &.press{
                background-color: #326ee4;
                color: rgba(255,255,255,0.5);
            }
        }
    }
    .task-btn {
        .btn {
            @include flex-center;
            width: 200px;
            height: 46px;
            border-radius: 23px;
            font-size: $font-size-minor;
            color: $general-black-eight;
            background: $assist-blue-color;
            &.disable {
                font-size: 24px;
                color: #999;
                background: #fff !important;
            }
            &.press{
                background-color: #326ee4;
                color: rgba(255,255,255,0.5);
            }
        }
    }
    .btn-get {
        .btn {
            @include flex-center;
            width: 142px;
            height: 46px;
            line-height: 46px;
            background-color: #3385ff;
            text-align: center;
            color: #fff;
            font-size: 13px; /*no*/
            border-radius: 30px;
            &.disable {
                font-size: 24px;
                color: #999;
                background: #f3f3f3 !important;
            }
            &.press{
                background-color: #326ee4;
                color: rgba(255,255,255,0.5);
            }
        }
    }
</style>
