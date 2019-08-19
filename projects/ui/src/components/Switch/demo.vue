<template>
    <div class="demo-wrapper">
        <h4>基本用法</h4>
        <div class="cell">
            <fast-switch v-model="switchVal1" ></fast-switch>
        </div>
        <h4>自定义尺寸大小</h4>
        <div class="cell">
            <fast-switch v-model="switchVal2" size="small" ></fast-switch>
        </div>
        <div class="cell">
            <fast-switch v-model="switchVal3" size="base" ></fast-switch>
        </div>
        <div class="cell">
            <fast-switch v-model="switchVal4" size="large"></fast-switch>
        </div>
        <h4>change事件</h4>
        <div class="cell">
            <fast-switch v-model="switchVal5" @switch-change="onChange"></fast-switch>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue'
    export default {
        name: "Switch.demo.vue",
        components: {
            'fast-switch': Switch
        },
        data() {
            return {
                switchVal1: true,
                switchVal2: true,
                switchVal3: true,
                switchVal4: true,
                switchVal5: true
            }
        },
        methods: {
            onChange(status) {
                alert(status);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cell {
        padding: 20px;
    }
</style>
