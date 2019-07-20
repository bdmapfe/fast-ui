<template>
    <div class="app-container">
        <!--基本用法-->
        <h4>基本用法</h4>
        <div class="base">
            <Cell title="这是标题" desc="描述性文字"></Cell>
            <Cell title="点击跳转到百度" :isLink="true" linkUrl="http://www.baidu.com" :showArrow="true"></Cell>
            <Cell title="这是标题" :showArrow="false" desc="右侧是一个默认的可点控件" :controlConfig="{borderRadius: '20%'}" @click-right-control="clickRightControl"></Cell>
            <Cell title="这是标题" :showArrow="false" desc="右侧是一个自定义的可点控件" :controlConfig="{img:'https://himg.bdimg.com/sys/portrait/item/fc89c885.jpg?time=6296', borderRadius: '20%'}" @click-right-control="clickRightControl"></Cell>
            <Cell title="这是标题" subTitle="这是副标题" desc="描述性文字" :showArrow="true"></Cell>
            <Cell cover="https://himg.bdimg.com/sys/portrait/item/fc89c885.jpg?time=6296" title="纸糖人" subTitle="专注书评写作，推荐各种好书"  desc="描述性文字"></Cell>
        </div>

        <!--slot用法-->
        <h4>通过Slot插槽分发内容</h4>
        <Cell title="这是标题" desc="描述性文字" :showArrow="true">
            <div class="cell-center-slot-l" slot="cell-center-slot">Cell中间内容区</div>
        </Cell>
        <Cell title="这是标题" :showArrow="true">
            <input type="text" slot="cell-center-slot" placeholder="这是一个input输入框">
        </Cell>
        <Cell>
            <div slot="cell-left-slot">左侧自定义slot</div>
            <div slot="cell-center-slot">居中自定义slot</div>
            <div slot="cell-right-slot">右侧自定义slot</div>
        </Cell>
    </div>
</template>

<script>
    import Cell from  './Cell.vue';

    export default {
        name: "Cell.demo.vue",

        components: {
            Cell
        },

        methods: {
            // 点击右侧控件
            clickRightControl() {
                this.$toast('You click Me', {duration: 2000});
            }
        }
    }
</script>

<style lang="scss">
    .app-container {
        h4 {
            padding: 0 30px;
            margin: 20px 0 10px;
        }

        input {
            font-size: 28px;
        }
    }
</style>
