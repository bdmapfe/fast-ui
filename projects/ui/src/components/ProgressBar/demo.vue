<template>
    <div class="demo-list">
        <h4 style="margin-bottom: 10px">基本用法</h4>
        <p>进度条-设置颜色</p>
        <div class="bar">
            <progress-bar :percentage="90" strokeColor="#8e71c7" :active="true" />
        </div>
        <p>进度条-百分比不显示/使用默认颜色</p>
        <div class="bar">
            <progress-bar percentage="10" :showText="false" strokeWidth="24" />
        </div>
        <p>进度条-百分比外显/使用默认颜色</p>
        <div class="bar">
            <progress-bar percentage="20" />
        </div>
        <p>圆形进度条</p>
        <div class="bar">
            <progress-bar :percentage="50" type="circle"/>
        </div>
        <p>圆形进度条-动态+自定义</p>
        <div class="bar">
            <progress-bar :percentage="60" type="circle" :circleObj="val" :active="true" />
        </div>
    </div>
</template>
<script>
import ProgressBar from './ProgressBar.vue';

export default {
    data() {
        return {
            val: {
                width: 18,
                strokeWidth: 150,
                color: "#3235aa"
            }
        };
    },
    components: {
        'progress-bar': ProgressBar
    },
    methods: {
        setAddVal() {},
        setReduceVal() {}
    }
};
</script>
<style lang="scss">
.demo-list {
    background: #ffffff;
    padding: 50px 30px;
}

.bar {
    margin-bottom: 50px;
    margin-top: 10px;
}
</style>