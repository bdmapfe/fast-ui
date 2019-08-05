<template>
    <div class="demo-wrapper">
        <nut-switch :active="true" ></nut-switch>
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
        }
    }
</script>

<style lang="scss" scoped>

</style>