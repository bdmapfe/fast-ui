<template>
    <div v-show="show" class="toast" :style="styleObject">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data() {
            return {
                show: false,
                text: 'toast',
                // 默认显示2.5s
                duration: 2500
            }
        },
        computed: {
            styleObject() {
                return {
                    webkitAnimation: 'show-toast ' + this.duration / 1000 + 's linear forwards',
                    animation: 'show-toast ' + this.duration / 1000 + 's linear forwards'
                }
            }
        }
    }
</script>


<style scoped>
    @keyframes show-toast {
        0% {opacity: 0;}
        25% {opacity: 1; z-index: 9999}
        50% {opacity: 1; z-index: 9999}
        75% {opacity: 1; z-index: 9999}
        100% {opacity: 0; z-index: 0}
    }

    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        background-color: #000;
        opacity: .7;
        color: #fff;
        box-sizing: border-box;
        min-height: 80px;
        padding: 20px 10px;
        line-height: 50px;
        min-width: 364px;
        max-width: 80%;
        border-radius: 15px;
        font-size: 28px;
        text-align: center;
        word-wrap: break-word;
    }
</style>
