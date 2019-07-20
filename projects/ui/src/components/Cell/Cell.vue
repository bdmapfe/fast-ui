<template>
    <a :href="linkUrl || 'javascript: void(0);'" class="fast-cell" :class="{'fast-cell-link': isLink}" :style="'background-color:' + bgColor">
        <ul class="fast-cell-container">
            <!--左侧-->
            <li class="fast-cell-left">
                <slot name="cell-left-slot">
                    <div class="fast-cell-left-cover" v-if="cover">
                        <img :src="cover">
                    </div>
                    <div class="fast-cell-left-content">
                        <span class="fast-cell-title" v-if="title">{{title}}</span>
                        <span class="fast-cell-sub-title" v-if="subTitle">{{subTitle}}</span>
                    </div>
                </slot>
            </li>

            <!--居中-->
            <li class="fast-cell-center">
                <slot name="cell-center-slot">{{centerText}}</slot>
            </li>

            <!--右侧-->
            <li class="fast-cell-right">
                <slot name="cell-right-slot">
                    <span class="fast-cell-desc" v-if="desc">{{desc}}</span>
                    <span class="fast-cell-arrow" v-if="showArrow"></span>
                    <span class="fast-cell-icon" v-if="controlConfig" :style="'border-radius:' + controlConfig.borderRadius" @click.stop="clickControl">
                    <img :src="controlConfig.img" v-if="controlConfig.img">
                </span>
                </slot>
            </li>
        </ul>
    </a>
</template>

<script type="text/javascript">
    export default {
        props: {
            // 头像
            cover: {
                type: String,
                default: ''
            },

            // 主标题
            title: {
                type: String,
                default: ''
            },

            // 副标题
            subTitle: {
                type: String,
                default: ""
            },

            // 居中文本内容
            centerText: {
                type: String,
                default: ""
            },

            // 右侧描述性文字
            desc: {
                type: String,
                default: ""
            },

            // 是否可点击跳转
            isLink: {
                type: Boolean,
                default: false
            },

            // 跳转链接
            linkUrl: {
                type: String,
                default: null
            },

            // 是否展示右侧箭头Icon
            showArrow: {
                type: Boolean,
                default: false
            },

            /**
             * description: 是否展示右侧自定义icon
             * params [Object]
             * eg: {img: '', borderRadius: ''}
             */
            controlConfig: {
                type: Object
            },

            // 背景色
            bgColor: {
                type: String,
                default: "#FFFFFF"
            }
        },

        methods: {
            clickControl() {
                this.$emit('click-right-control');
            }
        }
    }
</script>

<style lang="scss">
    @import "../../libs/css/public.scss";
    @import "../../libs/css/mixin.scss";
    @import "../../libs/css/variable.scss";

    .fast-cell {
        display: block;
        padding: 0 30px;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        color: $general-black-one;

        .fast-cell-container {
            @include flex();
            align-items: center;
            height: 100px;
            border-bottom: 1px solid #eee;

            span {
                display: inline-block;
                line-height: 1;
            }
            .fast-cell-left {
                @include flex();
                padding-right: 30px;
                max-width: 65%;
                align-items: center;
                flex-shrink: 0;

                span {
                    display: block;
                }

                .fast-cell-left-cover {
                    width: 54px;
                    height: 54px;
                    margin-right: 12px;
                    border-radius: 50%;
                    overflow: hidden;
                    flex-shrink: 0;
                    border: 1px solid rgba(0,0,0,.1);
                    background-color: #FFF;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .fast-cell-left-content {
                    width: 100%;
                }

                .fast-cell-title {
                    /*width: 92%;*/
                    font-size: 28px;
                    @include text-ellipsis;
                }
                
                .fast-cell-sub-title {
                    /*width: 92%;*/
                    font-size: 24px;
                    margin-top: 13px;
                    color: $general-black-two;
                    @include text-ellipsis
                }
            }

            .fast-cell-center {
                flex: auto;
            }

            .fast-cell-right {
                @include flex();
                align-items: center;
                color: $general-black-three;
                margin-left: auto;

                .fast-cell-desc {
                    font-size: 25px;
                }

                .fast-cell-arrow {
                    @include arrow;
                    margin: auto 0 auto 5px;
                }

                .fast-cell-icon {
                    width: 32px;
                    height: 32px;
                    background: url("../../assets/images/right-icon.png") no-repeat;
                    background-size: 100%;
                    border-radius: 50%;
                    margin-left: 9px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    .fast-cell-link {
        &:active {
            background: #f6f6f6!important;
        }
    }
</style>