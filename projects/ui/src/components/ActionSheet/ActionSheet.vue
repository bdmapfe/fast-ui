<template>
    <div class="action-sheet-wrapper">
        <!--蒙层-->
        <transition :name="supportAnimation ? 'fade':''">
            <div class="action-sheet-mask" @click="clickActionSheetMask" v-show="isVisible"></div>
        </transition>
        <!--底部面板-->
        <transition :name="supportAnimation ? 'slideUp':''">
            <div class="action-sheet-panel" v-show="isVisible">
                <div class="action-sheet-custom" v-if="$slots.custom">
                    <slot name="custom" v-html="custom"></slot>
                </div>
                <div v-if="supportHeadBar">
                    <fast-flex-row align="center" class="action-sheet-header">
                        <fast-flex-column span="1">
                            <div class="cancel-btn" @click="cancelChooseItem">取消</div>
                        </fast-flex-column>
                        <fast-flex-column span="8">
                            <div class="title">{{title}}</div>
                        </fast-flex-column>
                        <fast-flex-column span="1" v-if="showHeadBarSure">
                            <div class="sure-btn" @click="confirmChooseItem">确定</div>
                        </fast-flex-column>
                    </fast-flex-row>
                </div>
                <div class="action-sheet-content" v-if="!$slots.custom">
                    <ul class="action-sheet-menu">
                        <li class="action-sheet-item" v-for="(item, index) of menuItems"
                            :key="index" :class="{'item-active': activeItems[index]}"
                            @click="chooseItem(item)">
                            {{item[optionTag]}}
                        </li>
                    </ul>
                </div>
            </div>

        </transition>
    </div>
</template>

<script>
    import FlexRow from '../FlexRow/row.vue'
    import FlexColum from '../FlexColumn/column.vue'
    export default {
        name: "ActionSheet",
        components: {
            'fast-flex-row': FlexRow,
            'fast-flex-column': FlexColum
        },
        props: {
            supportAnimation: {
                type: Boolean,
                default: true
            },
            isVisible: {
                type: Boolean,
                default: false
            },
            supportHeadBar: {
                type: [Boolean, String],
                default: false
            },
            showHeadBarSure: {
                type: [Boolean, String],
                default: true
            },
            title: {
                type: String,
                default: ''
            },
            menuItems: {
                type: Array,
                default: () => []
            },
            optionTag: {
                type: String,
                default: 'name'
            },
            choosedItem: {
                type: Object,
                default: () => {return {name: ''};}
            }
        },
        data() {
            return {
                choosedItemValue: this.choosedItem[this.optionTag],
                choosedItemIndex: 0,
            }
        },
        computed: {
            activeItems() {
                let activeArray = [];
                this.menuItems.forEach((item, index)=> {
                    if (this.choosedItemValue === item[this.optionTag]) {
                        this.choosedItemIndex = index;
                        activeArray.push(true);
                    }
                    else  {
                        activeArray.push(false);
                    }
                });
                return activeArray;
            }
        },
        methods: {
            // 关闭面板
            closeActionSheet() {
                this.$emit('close');
            },

            // 点击蒙层
            clickActionSheetMask() {
                this.closeActionSheet();
            },
            chooseItem(item) {
                this.choosedItemValue = item[this.optionTag];
                this.$emit('choose-item', item);
            },
            cancelChooseItem() {
                this.choosedItemValue = this.choosedItem[this.optionTag];
                this.$emit('cancel-choose-item');
                this.closeActionSheet();
            },
            confirmChooseItem() {
                this.$emit('confirm-choose-item', this.menuItems[this.choosedItemIndex]);
                this.closeActionSheet();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../libs/css/public.scss";
    .action-sheet-mask {
        @include fixed-fullscreen($zindex-mask, $mask-color-bg)
    }
    .action-sheet-panel {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index: $zindex-actionsheet;
        background-color: $general-black-eight;
        .action-sheet-header {
            height: $height-cell-one-line;
            padding: 0 $padding-content-LR;
            font-size: $font-size-normal;
            color: $text-color-normal;
            border-bottom: $border-card-item;
            .title {
                text-align: center;
                font-size: $font-size-senior;
                color: $text-color-senior;
            }
            .cancel-btn, .sure-btn {
                height: $height-cell-one-line;
                line-height: $height-cell-one-line;
            }
        }
        .action-sheet-content {
            min-height: 180px;
            .action-sheet-menu {
                padding: 0 $padding-content-LR;
            }
            .action-sheet-item {
                height: $height-cell-one-line;
                line-height: $height-cell-one-line;
                text-align: center;
                border-bottom: $border-card-item;
                font-size: $font-size-normal;
            }
            .item-active {
                color: $assist-blue-color;
            }
            .action-sheet-item:last-child {
                border: none;
            }
        }
    }
    @include make-animation(slideUp, .5s);
    @include make-animation(fade, .5s);
</style>
