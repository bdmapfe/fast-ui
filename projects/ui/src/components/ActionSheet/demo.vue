<template>
    <div class="demos-wrapper">
        <fast-cell title="自定义内容" :controlConfig="{img:'https://himg.bdimg.com/sys/portrait/item/fc89c885.jpg?time=6296', borderRadius: '20%'}"
                   @click-right-control="cellClickHandler('custom')"></fast-cell>
        <fast-action-sheet :is-visible="customSheetVisible" @close="switchVisible('customSheetVisible')">
            <div slot="custom" class="custom-sheet">
                <span>用户自定义内容</span>
            </div>
        </fast-action-sheet>

        <fast-cell title="有顶部bar" :desc="choosedItem.name" :controlConfig="{img:'https://himg.bdimg.com/sys/portrait/item/fc89c885.jpg?time=6296', borderRadius: '20%'}"
                   @click-right-control="cellClickHandler('headBar')"></fast-cell>
        <fast-action-sheet :is-visible="headBarSheetVisible" title="请选择合适的项目" support-head-bar="true"
                           :menu-items="menuItems" :choosed-item="choosedItem"
                           @close="switchVisible('headBarSheetVisible')" @confirm-choose-item="confirmChooseItem">
        </fast-action-sheet>

    </div>
</template>

<script>
    import Cell from '../Cell/Cell.vue'
    import ActionSheet from './ActionSheet.vue'
    export default {
        name: "ActionSheet.demo.vue",
        components: {
            'fast-cell': Cell,
            'fast-action-sheet': ActionSheet
        },
        data() {
            return {
                customSheetVisible: false,
                headBarSheetVisible: false,
                menuItems: [
                    {name: '油车'},
                    {name: '纯电动'},
                    {name: '油电混合'}
                ],
                choosedItem: {name: '油车'}
            }
        },
        methods: {
            cellClickHandler(actionSheetType) {
                switch (actionSheetType) {
                    case 'custom':
                        this.customSheetVisible = true;
                        break;
                    case 'headBar':
                        this.headBarSheetVisible = true;
                        break;
                }
            },
            switchVisible(value) {
                this[value] = !this[value];
            },
            confirmChooseItem(item) {
                this.choosedItem = item;
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
