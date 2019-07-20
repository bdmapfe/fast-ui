<template>
    <div class="app-container">
        <input class="color-input" v-model="colorValue" type="text" placeholder="输入新的颜色值(#333)" />
        <div class="test-item" @click="updateColor">点击更新图片颜色</div>
        <div class="svg-container">
            <span v-change-svg-color="svgConfig">
                <img src="../../assets/images/github.svg">
            </span>
        </div>

    </div>
</template>

<script>
    import Vue from  'vue';
    import changeSvgColor from  './index.js';
    export default {
        name: "changeSvgColor.demo.vue",
        data() {
            return {
                colorValue: '',
                svgConfig: {
                    originColor: '%23969696',
                    targetColor: '#f00'
                }
            }
        },
        methods: {
            updateColor() {
                this.svgConfig.targetColor = this.colorValue;
            }
        }
    }
</script>

<style scoped lang="scss">
    .test-item, .color-input {
        background-color: #fff;
        height: 80px;
        font-size: 32px;
        line-height: 80px;
        text-align: center;
        margin-bottom: 10px;
    }
    .color-input {
        width: 100%;
    }
    .svg-container {
        text-align: center;
        img {
            display: none;
        }
    }
</style>
