<template>
    <div class="app-container">
        <div class="title">样式信息：</div>
        <div class="styleInfo">
            <div>
                <label>折线宽度：</label><input class="color-input" type="text" v-model="scoreLines.lineStyle.width"/>
            </div>
            <div>
                <label>折线颜色：</label><input class="color-input" type="text" v-model="scoreLines.lineStyle.strokeStyle"/>
            </div>
            <div>
                <label>折线边框颜色：</label><input class="color-input" type="text" v-model="scoreLines.lineStyle.fillStyle"/>
            </div>
            <div>
                <label>折线填充背景色：</label><input class="color-input" type="text" v-model="scoreLines.lineStyle.BGColor"/>
            </div>
        </div>
        <div class="title">数据信息：</div>
        <div class="styleInfo">
            <div v-for="(item, index) in scoreLines.lineInfo">
                <div>第{{index + 1}}点</div>
                <div>
                    <label>坐标：</label><input class="color-input" type="text" v-model="item.x"/><input class="color-input" type="text" v-model="item.y"/>
                </div>
                <div>
                    <label>提示文案：</label><input class="color-input" type="text" v-model="item.text"/>
                </div>
                <div>
                    <label>提示文案偏移：</label><input class="color-input" type="text" v-model="item.textOffset[0]"/><input class="color-input" type="text" v-model="item.textOffset[1]"/>
                </div>
            </div>
        </div>
        <div class="title">效果图：</div>
        <div class="linechat-container" v-line-chat="linechatConf">
            <canvas class="linechat"></canvas>
        </div>

    </div>
</template>

<script>
    import Vue from  'vue';
    import lineChat from  './index.js';
    export default {
        name: "linechat.demo.vue",
        data() {
            return {
                // 折线图基本配置
                baseConf: {
                    // canvas设计尺寸
                    canvasStyle: {
                        width: 750,
                        height: 355
                    },
                    // 分数相关
                    scoreLines: {
                        // 分数坐标点线数据
                        lineInfo: [],
                        // 标识线样式
                        lineStyle: {}
                    },
                    // // 标识线信息
                    // markLines: {
                    //     // 是否需要画标识线
                    //     needLine: false,
                    //     // 标识线数据
                    //     lineInfo: [],
                    //     // 标识线样式
                    //     markLineStyle: {
                    //         color: '#d8e7ff',
                    //         width: 1
                    //     }
                    // }
                },
                scoreLines: {
                    // 分数坐标点线数据
                    lineInfo: [],
                    // 标识线样式
                    lineStyle: {}
                }
            }
        },
        computed: {
            linechatConf () {
                // 融合传入的数据和样式数据
                this.update(this.baseConf, {
                    scoreLines: this.scoreLines,
                    markLines: this.markLines
                });
                return this.baseConf;
            }
        },
        methods: {
            updateColor() {
                this.svgConfig.targetColor = this.colorValue;
            },
            update: function(target, source) {
                for (var key in source) {
                    if (source[key] || source[key] === 0 || source[key] === '') {
                        target[key] = source[key];
                    }
                }
                return target;
            },
        },
        mounted () {
            this.scoreLines = {
                // 分数坐标点线数据
                lineInfo: [
                    {
                        x: 50,
                        y: 50,
                        text: '0',
                        textOffset: [12, 60]
                    },
                    {
                        x: 250,
                        y: 100,
                        text: '100',
                        textOffset: [16, 60],
                    },
                    {
                        x: 450,
                        y: 220,
                        text:'150',
                        textOffset: [16, 55],
                    },
                    {
                        x: 690,
                        y: 300,
                        text: '300',
                        textOffset: [22, 50],
                    },
                ],
                // 标识线样式
                lineStyle: {
                    width: 3,
                    strokeStyle: '#D0A357',
                    fillStyle: "#000",
                    gradientBGColor: [
                        {
                            percent: 0,
                            color: 'rgba(255,233,206,0.6)'
                        },
                        {
                            percent: 0.95,
                            color: '#fff'
                        },
                        {
                            percent: 1,
                            color: '#fff'
                        },

                    ],
                    BGColor: '#000'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .title {
        margin: 20px auto;
    }
    .color-input {
        width: 30%;
        margin-right: 10px;
    }
    .linechat-container {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
    }
    .linechat {
        width: 750px;
        height: 355px;
    }
</style>
