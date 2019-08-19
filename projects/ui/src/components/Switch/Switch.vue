<template>
    <div class="switch-container" :class="[{'switch-container-light': isActive}, 'switch-' + size]">
        <div @click="toggle" class="switch-btn"></div>
    </div>
</template>

<script>
export default {
    name: "Radio",
    data() {
        return {
            // 节流
            isAnimating: false
        }
    },
    // 注册v-model的更新事件，在本组件抛出isCheckedChanged事件的时候，父组件更新isChecked，并传递到本组件
    model: {
        prop: 'isActive',
        event: 'isActiveChanged'
    },
    props:{
        // 父组件传来的初始值
        isActive: {
            type: Boolean,
        },
        size: {
            type: String,
            default: 'base'
        }
    },
    methods: {
        // 节流处理
        toggle() {
            if (this.isAnimating) {
                return;
            }
            this.isAnimating = false;
            this.$emit('isActiveChanged', !this.isActive);
            setTimeout(() => {
                this.isAnimating = false;
                this.$emit('switch-change', this.isActive);
            }, 300);
        }
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
        border: 3px solid $general-black-three;

        .switch-btn {
            position: relative;
            border-radius: 50%;
            transition: all 0.3s;
            background-color: $general-black-three;
            left: 0;
        }
        &.switch-small{
            width: 40px;
            height: 16px;
            .switch-btn {
                width: 16px;
                height: 16px;
            }
        }
        &.switch-base{
            width: 40px;
            height: 26px;
            .switch-btn {
                width: 26px;
                height: 26px;
            }
        }
        &.switch-large{
            width: 60px;
            height: 32px;
            .switch-btn {
                width: 32px;
                height: 32px;
            }
        }
    }
    .switch-container-light {
        border-color: $assist-blue-color;

        .switch-btn {
            background-color: $assist-blue-color;
            left: 100%;
            transform: translate(-100%, 0);
        }
    }
</style>


