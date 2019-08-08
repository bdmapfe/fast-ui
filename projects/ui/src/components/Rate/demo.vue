<template>
    <div>
        <h4>基本用法</h4>
        <div>
            <fast-cell>
                <span slot="cell-center-slot"><fast-rate></fast-rate></span>
            </fast-cell>
        </div>

        <h4>只读</h4>
        <div>
            <fast-cell>
                <span slot="cell-center-slot"><fast-rate :readOnly="true"></fast-rate></span>
            </fast-cell>
        </div>

        <h4>缩放大小</h4>
        <div>
            <fast-cell>
                <span slot="cell-center-slot"><fast-rate :stars="starScale"></fast-rate></span>
            </fast-cell>
        </div>

        <h4>调整间距</h4>
        <div>
            <fast-cell>
                <span slot="cell-center-slot"><fast-rate :spacing="spacing"></fast-rate></span>
            </fast-cell>
        </div>

        <h4>事件</h4>
        <div>
            <fast-cell>
                <span slot="cell-center-slot"><fast-rate :stars="stars" @click="onClick"></fast-rate></span>
            </fast-cell>
        </div>

        <h4>自定义图标</h4>
        <div>
            <fast-cell>
                <span slot="cell-center-slot"><fast-rate
                :checkedIcon="icon1"
                :uncheckedIcon="icon2"
                ></fast-rate></span>
            </fast-cell>
        </div>
        
    </div>
</template>

<script>
import Rate from  './Rate.vue';
import Cell from  '../Cell/Cell.vue';
export default {
    name: "Rate.demo.vue",
    components: {
        'fast-rate': Rate,
        'fast-cell': Cell
    },
    data(){
        return{
            starScale: [
                {
                    active: 1,
                    scale: 0.5
                }, 
                {
                    active: 0,
                    scale: 0.75
                },
                {
                    active: 1,
                    scale: 1
                },
                {
                    active: 0,
                    scale: 0.75
                },
                {
                    active: 1,
                    scale: 0.5
                }
            ],
            stars: [
                {
                    active: 1,
                    scale: 1
                }, 
                {
                    active: 1,
                    scale: 1
                },
                {
                    active: 1,
                    scale: 1
                },
                {
                    active: 1,
                    scale: 1
                },
                {
                    active: 0,
                    scale: 1
                }
            ],
            spacing: '10px',
            icon1: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23F0250F' d='M16 6.204l-5.528-.803L8 .392 5.528 5.401 0 6.204l4 3.899-.944 5.505L8 13.009l4.944 2.599L12 10.103l4-3.899z'/%3E%3C/svg%3E")`,
            icon2: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23F0250F' d='M16 6.204l-5.528-.803L8 .392 5.528 5.401 0 6.204l4 3.899-.944 5.505L8 13.009l4.944 2.599L12 10.103l4-3.899zm-8 5.569l-3.492 1.836.667-3.888L2.35 6.968l3.904-.567L8 2.864l1.746 3.537 3.904.567-2.825 2.753.667 3.888L8 11.773z'/%3E%3C/svg%3E")`
        }
    },
   
    methods: {
        // 点击事件
        onClick(idx, index) {
            for (let i = 0; i < this.stars.length; i++) {
                let item = this.stars[i];
                if (i > index) {
                    item.active = 0;
                } else {
                    item.active = 1;
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.demo{
    padding-left:0;
    padding-right:0;
}
h4{
    padding:0 10px;
}
</style>

