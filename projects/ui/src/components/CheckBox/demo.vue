<template>
    <div class="demo-wrapper">
        <nut-radio v-model="checkbox">选项</nut-radio>
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
                checkbox: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>