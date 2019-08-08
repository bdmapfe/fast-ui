<template>
    <div class="demo-wrapper">
        <h4>基本用法</h4>
        <div class="cell">
            <fast-checkbox v-model="value1">选项</fast-checkbox>
        </div>
        <h4>自定义尺寸</h4>
        <div class="cell">
            <fast-checkbox v-model="value2" size="small">小号</fast-checkbox>
        </div>
        <div class="cell">
            <fast-checkbox v-model="value3" size="base">默认</fast-checkbox>
        </div>
        <div class="cell">
            <fast-checkbox v-model="value4" size="large">大号</fast-checkbox>
        </div>
        <h4>禁用动效</h4>
        <div class="cell">
            <fast-checkbox v-model="value5" :animation="false">没有动效</fast-checkbox>
        </div>
        <h4>事件</h4>
        <div class="cell">
            <fast-checkbox v-model="value6" @checkboxValueChanged="checkboxChange">change事件</fast-checkbox>
        </div>
    </div>
</template>

<script>
    import Checkbox from './CheckBox.vue'
    export default {
        name: "Radio.demo.vue",
        components: {
            'fast-checkbox': Checkbox
        },
        data() {
            return {
                value1: false,
                value2: false,
                value3: false,
                value4: false,
                value5: false,
                value6: false
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
