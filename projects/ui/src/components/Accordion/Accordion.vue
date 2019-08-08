<template>
    <div class="fast-accordion">
        <div class="fast-accordion-list" v-for="(item, index) in listData">
            <!--accordion header-->
            <Row class="accordion-header" :index="index" @click.native="showContents(index)">
                <slot name="accordion-header">
                </slot>
                <h2 class="accordion-title" v-if="item && defaultLayout">{{item.title}}</h2>
                <div class="arrow" :class="{'arrow-up': showContent === index}" v-if="defaultLayout"></div>
            </Row>

            <!--accordion body-->
            <Row class="accordion-body" v-if="showContent === index">
                <slot name="accordion-body"></slot>
                <h2 class="accordion-content" v-if="item && defaultLayout">{{item.content}}</h2>
            </Row>
        </div>
    </div>
</template>

<script>
    import Row from '../FlexRow/row';

    export default {
        name: 'Accordion',

        props: {
            // 数据
            datas: {
                type: Array,
                default: () => {
                    return [
                        {
                            title: '',
                            content: ''
                        }
                    ]
                }
            },

            // 是否使用默认样式
            defaultLayout: {
                type: Boolean,
                default: true
            }
        },

        components: {
            Row
        },

        data() {
            return {
                showContent: '',
                listData: this.datas
            }
        },

        watch: {
            datas() {
                this.listData = this.datas;
            }
        },

        methods: {
            showContents(index) {
                console.log(1111);
                this.showContent = this.showContent === index ? '' : index;
            }
        }
    }
</script>

<style lang="scss">
    @import "../../libs/css/mixin.scss";

    .fast-accordion-list {
        background-color: #FFF;
        border-bottom: 1px solid #EEE;

        .accordion-header {
            padding: 27px 0;
            align-items: center;

            .accordion-title {
                flex: 1;
                font-size: 30px;
                color: #333;
                line-height: 34px;
                height: 34px;
                font-weight: normal;
            }

            .arrow {
                @include arrow(bottom);
            }

            .arrow-up {
                @include arrow(top)
            }
        }

        .accordion-body {
            margin-bottom: 27px;
            position: relative;
            height: 100%;

            .accordion-content {
                font-size: 26px;
                color: #666;
                line-height: 38px;
                font-weight: normal;
            }
        }
    }
</style>