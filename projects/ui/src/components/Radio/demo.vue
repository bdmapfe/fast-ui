<template>
    <div class="demo-wrapper">
        <h4>Radio基本用法</h4>
        <div class="cell">
            <fast-radio v-model="radioVal" label="2">b</fast-radio>
        </div>
        <h4>组合使用Radio</h4>
        <div class="cell">
            <fast-radio v-model="radioVal1" label="2">b</fast-radio>
            <fast-radio v-model="radioVal1" label="3">c</fast-radio>
        </div>
        <h4>RadioGroup基本用法</h4>
        <div class="cell">
            <fast-radiogroup v-model="radioVal2">
                <fast-radio label="2">b</fast-radio>
                <fast-radio label="3">c</fast-radio>
            </fast-radiogroup>
        </div>
        <h4>自定义尺寸</h4>
        <div class="cell">
            <fast-radio size="small" v-model="radioVal3" label="2">b</fast-radio>
        </div>
        <div class="cell">
            <fast-radio size="base" v-model="radioVal3" label="3">c</fast-radio>
        </div>
        <div class="cell">
            <fast-radio size="large" v-model="radioVal3" label="4">d</fast-radio>
        </div>
        <h4>RadioGroup整体定义尺寸</h4>
        <div class="cell">
            <fast-radiogroup size="small" v-model="radioVal4">
                <fast-radio label="2">b</fast-radio>
                <fast-radio label="3">c</fast-radio>
                <fast-radio label="4">d</fast-radio>
            </fast-radiogroup>
        </div>
        <h4>禁用动效</h4>
        <div class="cell">
            <fast-radiogroup v-model="groupValue" :animated="false">
                <fast-radio label="2">b</fast-radio>
                <fast-radio label="3">c</fast-radio>
                <fast-radio label="4">d</fast-radio>
            </fast-radiogroup>
        </div>
    </div>
</template>

<script>
    import Radio from './Radio.vue';
    import Radiogroup from '../Radiogroup/Radiogroup.vue';
    import Cell from '../Cell/Cell.vue'
    export default {
        name: "Radio.demo.vue",
        components: {
            'fast-radio': Radio,
            'fast-radiogroup': Radiogroup,
            'fast-cell': Cell
        },
        data() {
            return {
                radioVal: "2",
                radioVal1: "1",
                radioVal2: "1",
                radioVal3: "1",
                radioVal4: "1",
                groupValue: "1"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cell {
        padding: 20px;
    }
</style>
