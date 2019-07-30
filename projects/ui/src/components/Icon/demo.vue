<template>
    <Icon :url="logo" @click="clickHandler" ></Icon>
</template>

<script>
    import Icon from  './Icon.vue';
    import logo from  '../../../../demos/src/assets/images/logo.png';

    export default {
        name: "Icon.demo.vue",
        components: {
            'Icon': Icon
        },
        data() {
            return {
                logo: logo
            }
        },
        methods: {
            clickHandler() {
                console.log(111)

            }
        }
    }
</script>

<style scoped>

</style>
