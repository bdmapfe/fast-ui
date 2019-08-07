<template>
    <fast-action-sheet :is-visible="isVisible" @close="dispatchClose">
        <div slot="custom" class="custom-sheet">
            <div class="city-abb" @click="setAbb">
                <div class="line" v-for="prefixerArray in prefixerArrays">
                    <div v-for="prefixer in prefixerArray" :class="{hide: !prefixer}" class="item">
                        {{ prefixer }}
                    </div>
                </div>
            </div>
        </div>
    </fast-action-sheet>
</template>

<script>
    import ActionSheet from '../ActionSheet/ActionSheet.vue';
    export default {
        name: "CarPlatePrefixer",
        components: {
            fastActionSheet: ActionSheet
        },
        props: {
            isVisible: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixerArrays: [
                    ['京', '沪', '浙', '苏', '粤', '鲁', '晋', '冀', '豫'],
                    ['川', '渝', '辽', '吉', '黑', '皖', '鄂', '湘', '赣'],
                    ['闽', '陕', '甘', '宁', '蒙', '津', '贵', '云', '桂'],
                    ['琼', '青', '新', '藏', '', '', '', '', '']
                ]
            }
        },
        methods: {
            // 选择车牌归属地后
            setAbb(event) {
                const choosedValue = event.target.innerText;
                if (choosedValue.length !== 0) {
                    this.$emit('changePrefixer', choosedValue);
                }
                event.stopPropagation();
                this.dispatchClose();
            },
            // 关闭面板
            dispatchClose() {
                this.$emit('close');
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../libs/css/public.scss";
    .hide {
        visibility: hidden;
    }
    .city-abb {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 0 6px 12px;
        background: #ccc;
        font-size: 36px;
        color: $text-color-senior;
        @include iphonex(padding, bottom);
        .line {
            display: -webkit-box;
        }
        .item {
            @include flex-center();
            box-sizing: border-box;
            flex: 1;
            width: 63px;
            height: 94px;
            line-height: 94px;
            margin: 24px 6px 8px;
            text-align: center;
            background: #fff;
            border-radius: 10px;
        }
    }
</style>
