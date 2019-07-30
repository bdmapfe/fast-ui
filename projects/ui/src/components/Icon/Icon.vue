<template>

    <i @click="clickHandler" :class=classes :style="styles" ></i>

</template>

<script>
    export default {
        name: 'Icon',
        props: ['url', 'onclick', 'className', 'iconStyle'],
        data() {
            return {

            }
        },
        computed: {
            classes() {
                if (this.className) {
                    return 'bdmap-icon ' + this.className;
                }else{
                    return 'bdmap-icon'
                }
            },
            styles(){
                let style = {}

                if(this.url){
                    style = {
                        ...this.iconStyle,
                        backgroundImage: `url('${this.url}')`
                    }
                }

                return style
            }
        },
        methods: {

            clickHandler() {
                if(this.onclick){
                    this.onclick()
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../libs/css/public.scss";
    .bdmap-icon{
        display: inline-block;
        background-size: 100%;
        width:20px;
        height:20px;
        background-repeat: no-repeat;
    }

</style>
