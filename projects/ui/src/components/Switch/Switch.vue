<template>
    <div class="switch-container" :class="{'switch-container-light':isActive}">
        <div @click = "toggle" class="switch-btn"></div>
    </div>
</template>

<script>
export default {
    name: "Radio",
    data() {
        return {
            // 缓存父组件传来的bollean减少组件耦合ß
            isActive: false,
            // 节流
            isAnimating:false
        }
    },
    props:{
        // 父组件传来的初始bollean值
        active: {
            type: Boolean,
        },
    },
    methods: {
        // 节流处理
        toggle: function() {
            if(this.isAnimating){
                return;
            }
            this.isAnimating = false;
            this.isActive = !this.isActive;
            seTimeout(() => {
                this.isAnimating = false;
            },300);
        }
    },
    create() {
        this.isActive = this.active;
    }
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/public.scss";
    .switch-container {
        position: relative;
        background-color: white;
        width: 60px;
        height: 26px;
        padding: 4px;
        border-radius: 1000px;
        transition: all 0.3s;
        border: 3px solid gray;

        .switch-btn {
            position: relative;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            transition: all 0.3s;
            background-color: gray;
            left: 0px;
        }
    }
    .switch-container-light {
        border: 3px solid #3385ff;

        .switch-btn {
            background-color: #3385ff;
            left: 34px;
        }
    }
</style>


