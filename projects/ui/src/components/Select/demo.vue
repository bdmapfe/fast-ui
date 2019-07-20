<template>
    <div class="app-container">
        <div class="test-item" @click="showSelect">item-select</div>
        <item-select v-model="isShowSelect" :data="dataSelect" :default-index="curSelectIndex" @changeIndex="changeSelectIndex"></item-select>
    </div>
</template>

<script>
    import Select from  './Select.vue';
    export default {
        name: "Select.demo.vue",
        components: {
            'item-select': Select
        },
        data() {
            return {
                // 是否展示select列表
                isShowSelect: false,
                // 当前选择列表 选中态的index
                curSelectIndex: 0,
            }
        },
        computed: {
            dataSelect() {
                let me = this;
                let obj = {
                    title: '选择保险公司',
                    list: [
                        {
                            index: 0,
                            value: '太平洋保险'
                        },
                        {
                            index: 1,
                            value: '大地保险'

                        }
                    ]
                };
                return obj;
            }
        },
        methods: {
            // 保险公司列表更改
            changeSelectIndex(data) {
                this.curSelectIndex = data.index;
            },
            showSelect() {
                this.isShowSelect = true;
            }
        }
    }
</script>

<style scoped>
    .test-item {
        background-color: #fff;
        height: 80px;
        font-size: 32px;
        line-height: 80px;
        text-align: center;
        margin-bottom: 10px;
    }
</style>
