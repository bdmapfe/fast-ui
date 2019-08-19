<template>
    <div class="demo-list">
        <h4>直接返回字符串</h4>
        <div class="bg">
            <count-down :endTime="end" :show-plain-text="true"></count-down>
        </div>
        <h4>显示为 天时分秒</h4>
        <div class="bg">
            <count-down :show-days="true" :show-plain-text="true" :endTime="end"></count-down>
        </div>
        <h4>显示天</h4>
        <div class="bg">
            <count-down :endTime="end" :show-days="true"></count-down>
        </div>
        <h4>设定开始时间，此处设置了系统时间-30s</h4>
        <div class="bg">
            <count-down :endTime="end" :start-time="startTime"></count-down>
        </div>
        <h4>运营活动用倒计时,时分秒</h4>
        <div class="bg">
            <count-down :endTime="end" :show-activity="true"></count-down>
        </div>
        <h4>运营活动用倒计时,显示天时分,有样式</h4>
        <div class="bg">
            <count-down :endTime="end" :show-activity="true" :show-days="true" :style-configs="configs"></count-down>
        </div>
    </div>
</template>

<script>
    import CountDown from './CountDown'
    export default {
        name: 'CountDown.demo.vue',
        components: {
            'count-down': CountDown
        },
        data() {
            return {
                startTime: Date.now() - 30 * 1000,
                end: Date.now() + 900000 * 1000,
                configs: {
                    activityWidth: .5,
                    activityHeight: .6,
                    numBg: '#ad2a3c',
                    numColor: '#ffdfb5',
                    numSize: .4,
                    textBg: '#fff',
                    textColor: '#333',
                    textSize: .4
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .demo-list {
        .bg {
            width: 100%;
            height: 100px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
