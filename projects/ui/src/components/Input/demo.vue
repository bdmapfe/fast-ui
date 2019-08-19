<template>
    <div class="demo-wrapper">
        <h4>基本用法</h4>
        <p class="desc">input-basic</p>
        <div class="test-box">
            <fast-input label="车牌号码：" v-model="testValue1" placeholder="请输入车牌号"></fast-input>
        </div>

        <p class="desc">input-no-border</p>
        <div class="test-box">
            <fast-input label="车牌号码：" v-model="testValue1" :has-border="false" placeholder="请输入车牌号"></fast-input>
        </div>

        <p class="desc">input-disabled</p>
        <div class="test-box">
            <fast-input label="车牌号码：" v-model="testValue2" disabled="true" placeholder="请输入车牌号"></fast-input>
        </div>

        <p class="desc">input-readonly</p>
        <div class="test-box">
            <fast-input label="车牌号码：" v-model="testValue2"  readonly="true" placeholder="请输入车牌号"></fast-input>
        </div>

        <p class="desc">input-maxlength</p>
        <div class="test-box">
            <fast-input label="车牌号码："  v-model="testValue1" maxlength="8" placeholder="车牌号长度不超过8位"></fast-input>
        </div>

        <p class="desc">input-backgroundColor</p>
        <div class="test-box">
            <fast-input label="车牌号码：" v-model="testValue1" :has-bg-color="true" placeholder="车牌号长度不超过8位"></fast-input>
        </div>

        <p class="desc">input-noclear</p>
        <div class="test-box">
            <fast-input label="车牌号码：" v-model="testValue1" :clear-btn-exist="false" placeholder="车牌号长度不超过8位"></fast-input>
        </div>

        <p class="desc">input-events</p>
        <div class="test-box">
            <fast-input label="车牌号码：" v-model="testValue1" @input="inputChange" placeholder="车牌号长度不超过8位"></fast-input>
        </div>
    </div>
</template>

<script>
    import Input from './Input.vue'
    export default {
        name: "Input.demo",
        components: {
            'fast-input': Input
        },
        data() {
            return {
                testValue1: '',
                testValue2: '京N34563'
            }
        },
        methods: {
            inputChange(value) {
                alert('event-input-emit:: the value of the input is: ' + value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .demo-wrapper {
        padding: 30px;
    }
    .desc {
        color: #999;
        padding-bottom: 16px;
        font-size: 24px;
    }
    .test-box {
        background: #fff;
        margin-bottom: 40px;
        padding: 30px;
        font-size: 24px;
    }
    .taller {
        height: 100px;
    }
    .test-item {
        height: 50px;
        line-height: 50px;
        color: #fff;
        text-align: center;
        background: #3385ff;
    }
    .light {
        opacity: .6;
    }
</style>
