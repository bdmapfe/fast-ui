<template>
    <div class="app-container">
        <h4>效果图：</h4>
        <div class="linechat-container" v-line-chat="linechatConf">
            <canvas class="linechat"></canvas>
        </div>
        <h4>样式信息：</h4>
        <div class="styleInfo">
            <Cell title="折线宽度" class="cell">
                <input type="text" slot="cell-center-slot" v-model="lineInfo.lineStyle.width">
            </Cell>
            <Cell title="折线颜色">
                <input type="text" slot="cell-center-slot" class="color-input" v-model="lineInfo.lineStyle.strokeStyle">
            </Cell>
            <Cell title="折线边框颜色">
                <input type="text" slot="cell-center-slot" v-model="lineInfo.lineStyle.fillStyle">
            </Cell>
            <Cell :title="getTitle('背景渐变点', index)" v-for="(item, index) in lineInfo.lineStyle.gradientBGColor" :key="item.percent">
                <input type="text" slot="cell-center-slot" class="color-input" v-model="item.percent">
                <input type="text" slot="cell-center-slot" class="color-input" v-model="item.color">
            </Cell>
            <Cell title="提示框文字颜色">
                <input type="text" slot="cell-center-slot" v-model="tipsInfo.tipsStyle.textColor">
            </Cell>
            <Cell title="提示框背景颜色">
                <input type="text" slot="cell-center-slot" v-model="tipsInfo.tipsStyle.textBgColor">
            </Cell>
        </div>
        <h4>数据信息：</h4>
        <div class="styleInfo">
            <Cell :title="getTitle('数据点', index)" v-for="(item, index) in lineInfo.linePointInfo" :key="item.x">
                <input type="text" slot="cell-center-slot" class="color-input" v-model="item.x">
                <input type="text" slot="cell-center-slot" class="color-input" v-model="item.y"/>
            </Cell>
        </div>
        <h4>提示信息：</h4>
        <div class="styleInfo">
            <Cell :title="getTitle('提示点', index)" v-for="(item, index) in tipsInfo.tipsPointInfo" :key="item.x">
                <input type="text" slot="cell-center-slot" class="color-input" v-model="item.x">
                <input type="text" slot="cell-center-slot" class="color-input" v-model="item.y"/>
            </Cell>
        </div>
    </div>
</template>

<script>
    import Vue from  'vue';
    import lineChat from  './index.js';
    import Cell from  '../../components/Cell/Cell.vue';
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
                    lineInfo: {
                        // 分数坐标点线数据
                        linePointInfo: [],
                        // 标识线样式
                        lineStyle: {}
                    },
                    // 提示弹窗信息
                    tipsInfo: {
                        // 分数坐标点线数据
                        tipsPointInfo: [],
                        // 标识线样式
                        tipsStyle: {}
                    }
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
                // 分数坐标点线数据
                lineInfo: {
                    linePointInfo: [],
                    lineStyle: {}
                },
                // 标识线样式
                tipsInfo: {
                    tipsPointInfo: [],
                    tipsStyle: {}
                }
            }
        },
        components: {
            Cell
        },
        computed: {
            linechatConf () {
                // 融合传入的数据和样式数据
                this.update(this.baseConf, {
                    lineInfo: this.lineInfo,
                    tipsInfo: this.tipsInfo
                });
                return this.baseConf;
            }
        },
        methods: {
            update: function(target, source) {
                for (var key in source) {
                    if (source[key] || source[key] === 0 || source[key] === '') {
                        target[key] = source[key];
                    }
                }
                return target;
            },
            getTitle: function(header, index) {
                let title = header + (index + 1);
                return title;
            }
        },
        mounted () {
            this.lineInfo = {
                // 分数坐标点线数据
                linePointInfo:[
                    {
                        x: 50,
                        y: 50
                    },
                    {
                        x: 250,
                        y: 100
                    },
                    {
                        x: 450,
                        y: 220
                    },
                    {
                        x: 690,
                        y: 300
                    }
                ],
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
                        }
                    ]
                }
            };

            // 提示信息
            this.tipsInfo = {
                tipsPointInfo:[
                    {   
                        text: '0',
                        x: 40,
                        y: 110
                    },
                    {
                        text: '100',
                        x: 240,
                        y: 160
                    },
                    {
                        text: '200',
                        x: 430,
                        y: 280
                    },
                    {
                        text: '300',
                        x: 675,
                        y: 350
                    }
                ],
                tipsStyle: {
                    textBgColor: 'rgba(249,241,232,0.6)',
                    textColor: '#D0A357',
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    h4 {
        padding: 0 30px;
        margin: 20px 0 10px;
    }
    .title {
        padding: 0 30px;
        margin: 20px 0 10px;
    }
    .styleInfo {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 50vw);
        grid-gap: 0;
    }
    .color-input {
        width: 100%;
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
