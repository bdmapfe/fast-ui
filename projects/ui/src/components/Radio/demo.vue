<template>
    <div class="demo-wrapper">
        <h4>Radio基本用法</h4>
        <div class="cell">
            <nut-radio v-model="radioVal" label="b">b</nut-radio>
        </div>
        <h4>组合使用Radio</h4>
        <div class="cell">
            <nut-radio v-model="radioVal1" label="b">b</nut-radio>
            <nut-radio v-model="radioVal1" label="c">c</nut-radio>
        </div>
        <h4>RadioGroup基本用法</h4>
        <div class="cell">
            <nut-radiogroup v-model="radioVal2">
                <nut-radio label="b">b</nut-radio>
                <nut-radio label="c">c</nut-radio>
            </nut-radiogroup>
        </div>
        <h4>自定义尺寸</h4>
        <div class="cell">
            <nut-radio size="small" v-model="radioVal3" label="b">b</nut-radio>
        </div>
        <div class="cell">
            <nut-radio size="base" v-model="radioVal3" label="c">c</nut-radio>
        </div>
        <div class="cell">
            <nut-radio size="large" v-model="radioVal3" label="d">d</nut-radio>
        </div>
        <h4>RadioGroup整体定义尺寸</h4>
        <div class="cell">
            <nut-radiogroup size="small" v-model="radioVal4">
                <nut-radio label="b">b</nut-radio>
                <nut-radio label="c">c</nut-radio>
                <nut-radio label="d">d</nut-radio>
            </nut-radiogroup>
        </div>
        <h4>禁用动效</h4>
        <div class="cell">
            <nut-radiogroup v-model="radiogroup1" :animated="false">
                <nut-radio label="b">b</nut-radio>
                <nut-radio label="c">c</nut-radio>
                <nut-radio label="d">d</nut-radio>
            </nut-radiogroup>
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
            'nut-radio': Radio,
            'nut-radiogroup': Radiogroup,
            'nut-cell': Cell
        },
        data() {
            return {
                radioVal: "a",
                radioVal1: "a",
                radioVal2: "a",
                radioVal3: "a",
                radioVal4: "a",
                radiogroup1: "a"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cell {
        padding: 20px;
    }
</style>