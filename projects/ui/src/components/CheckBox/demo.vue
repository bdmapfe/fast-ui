<template>
    <div class="demo-wrapper">
        <h4>基本用法</h4>
        <div class="cell">
            <nut-radio v-model="checkbox1">选项</nut-radio>
        </div>
        <h4>自定义尺寸</h4>
        <div class="cell">
            <nut-radio v-model="checkbox2" size="small">小号</nut-radio>
        </div>
        <div class="cell">
            <nut-radio v-model="checkbox3" size="base">默认</nut-radio>
        </div>
        <div class="cell">
            <nut-radio v-model="checkbox4" size="large">大号</nut-radio>
        </div>
        <h4>禁用动效</h4>
        <div class="cell">
            <nut-radio v-model="checkbox5" :animation="false">没有动效</nut-radio>
        </div>
        <h4>事件</h4>
        <div class="cell">
            <nut-radio v-model="checkbox6" @change="checkboxChange">change事件</nut-radio>
        </div>
    </div>
</template>

<script>
    import Radio from './CheckBox.vue'
    export default {
        name: "Radio.demo.vue",
        components: {
            'nut-radio': Radio
        },
        data() {
            return {
                checkbox1: false,
                checkbox2: false,
                checkbox3: false,
                checkbox4: false,
                checkbox5: false,
                checkbox6: false,

            }
        },
        methods: {
            checkboxChange() {
                alert("触发事件");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cell {
        padding: 20px;
        box-sizing: border-box;
    }
</style>