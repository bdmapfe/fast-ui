<template>
    <div class="demos-wrapper">
        <fast-cell title="点击右侧图片，选择车牌归属地" :desc="choosedItem" :controlConfig="{img:'https://himg.bdimg.com/sys/portrait/item/fc89c885.jpg?time=6296', borderRadius: '20%'}"
                   @click-right-control="cellClickHandler()"></fast-cell>
        <fast-car-plate-prefixer :is-visible="prefixerVisible" @changePrefixer="platePrefixerChanged" @close="switchVisible()"></fast-car-plate-prefixer>
    </div>
</template>

<script>
    import Cell from '../Cell/Cell.vue'
    import CarPlatePrefixer from './CarPlatePrefixer.vue'
    export default {
        name: "ActionCarPlatePrefixer.demo.vue",
        components: {
            'fast-cell': Cell,
            'fast-car-plate-prefixer': CarPlatePrefixer
        },
        data() {
            return {
                prefixerVisible: false,
                choosedItem: '京'
            }
        },
        methods: {
            cellClickHandler() {
                this.prefixerVisible = true;
            },
            switchVisible() {
                this.prefixerVisible = !this.prefixerVisible;
            },
            platePrefixerChanged(value) {
                this.choosedItem = value || '京';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../libs/css/public.scss";
    .custom-sheet {
        height: 300px;
        @include flex-center();
    }
</style>
