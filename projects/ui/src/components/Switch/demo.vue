<template>
    <div class="demo-wrapper">
        <h4>基本用法</h4>
        <div class="cell">
            <nut-switch :active="true" ></nut-switch>
        </div>
        <h4>自定义尺寸大小</h4>
        <div class="cell">
            <nut-switch :active="true" size="small" ></nut-switch>
        </div>
        <div class="cell">
            <nut-switch :active="true" size="base" ></nut-switch>
        </div>
        <div class="cell">
            <nut-switch :active="true" size="large"></nut-switch>
        </div>
        <h4>change事件</h4>
        <div class="cell">
            <nut-switch :active="true" @change="onChange"></nut-switch>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue'
    export default {
        name: "Switch.demo.vue",
        components: {
            'nut-switch': Switch
        },
        data() {
            return {

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