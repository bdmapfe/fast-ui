<template>
    <div class="demo-wrapper" :class="{'demo-frame-wrapper': isInFrame}">
        <keep-alive>
            <router-view ></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                isInFrame: window.frames.length !== parent.frames.length
            }
        }
    }
</script>

<style lang="scss">
    @import "../../libs/css/base.scss";
    body {
        font-size: 32px;
        margin: 0;
        color: #2e2d2d;
        font-family: PingHei, "Microsoft YaHei", "Lucida Grande",
        "Lucida Sans Unicode", STHeiti, Helvetica, Arial, Verdana, "sans-serif",
        "PingHei-light", SimHei, "Droid Sans";
    }
    .demo-wrapper {
        width: 100%;
        min-height: 100vh;
        padding-top: 40px;
        box-sizing: border-box;
        background: #f6f6f6;
    }
    .demo-frame-wrapper {
        padding-top: 0;
    }
    .demo-frame-wrapper /deep/ .github-btn {
        top: 0;
    }
    div, span, p, ul, li {
        margin: 0;
        padding: 0;
    }
</style>
