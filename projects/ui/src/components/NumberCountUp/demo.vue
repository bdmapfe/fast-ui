<template>
    <div class="app-container">
        <div class="demo-container">
            <div>
                行驶里程
                <div class="distance">
                    <number-count-up :setting="numInfo" :is-show-ani="isShowAni"></number-count-up>
                </div>
                公里
            </div>
            <div @click="toggleAnimation" class="btn">{{aniTip}}</div>
        </div>
    </div>
</template>

<script>
    import NumberCountUp from  './NumberCountUp.vue';
    export default {
        name: "NumberCountUp.demo.vue",
        components: {
            'numberCountUp': NumberCountUp
        },
        data() {
            return {
                numInfo: {
                    speed: 2000, // 动画速度
                    num: '091.00', // 初始化值
                    iniAnimate: true, // 是否要初始化动画效果
                    dot: 2 // 保留几位小数点
                },
                isShowAni: false,
                aniTip: '点击显示动效'
            }
        },
        methods: {
            toggleAnimation() {
                this.isShowAni = !this.isShowAni;
                this.aniTip = !this.isShowAni ? '点击显示动效' : '点击重置动效';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo-container {
        padding: 50px;
    }
    .distance {
        display: inline-block;
        width: 300px;
    }
    .btn {
        margin-top: 30px;
    }
</style>
