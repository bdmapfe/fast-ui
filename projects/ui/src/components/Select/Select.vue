<template>
    <div class="mod-select">
        <div class="mask" :value="value" v-show="visible" @click="close"></div>
        <div class="content" :class="{toggle: visible}">
            <div class="head">
                <span class="btn btn-cancel" @click="close">取消</span>
                <div class="text">{{data.title}}</div>
            </div>
            <ul>
                <li v-for="(item, index) in data.list" :class="{'cur': isChecked[index] === 1}"
                    @click="change" :data-index="index" :data-id="item.id">
                    <span class="btn btn-check"></span>{{item.value}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false,
                isChecked: [],

            }
        },
        props: ['value', 'data', 'defaultIndex'],
        watch:{
            isChecked(val) {
                console.log('val', val);
            },
            value(val) {
                this.visible = val;
            },
            visible(val) {
                this.$emit('input', val);

                // 每次打开弹窗时，都需要初始化当前选中的状态
                if (val === true) {
                    for (let i = 0; i < this.data.list.length; i++) {
                        if (i === this.defaultIndex) {
                            this.isChecked[i] = 1;
                        } else {
                            this.isChecked[i] = 0;
                        }
                    }
                }
                // 弹窗出现后阻止默认滚动
                const obody = document.querySelector('body');
                if (val) {
                    obody.addEventListener('touchmove', this.closeDefault, {passive: false});
                } else {
                    obody.removeEventListener('touchmove', this.closeDefault, {passive: false});
                }
            }
        },
        methods: {
            close() {
                this.visible = false;
                this.$emit('close');
            },
            change(e) {
                let target = e.target;
                let defaultIndex = parseInt(target.getAttribute('data-index'));
                for (let i = 0; i < this.isChecked.length; i++) {
                    if (i === defaultIndex) {
                        this.isChecked[i] = 1;
                        if (e.target.getAttribute('data-index') >= 0) {
                            // 触发组件外部注册的changeIndex事件，并将选中内容传递给父组件
                            let curSelectData = {
                                index: i,
                                value: e.target.innerText,
                                id: e.target.getAttribute('data-id')
                            };
                            this.$emit('changeIndex', curSelectData);
                        }
                    } else {
                        this.isChecked[i] = 0;
                    }
                }
                this.close();
            },
            closeDefault(e) {
                e.preventDefault();
            }
        }
    }
</script>

<style >
    .mod-select {
        position: relative;
    }
    .mod-select .mask {
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        top: 0;
        left: 0;
    }
    .mod-select .content {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;

        background: #fff;
        text-align: center;
        font-size: 32px;

        transform: translateY(100%);
        backface-visibility: hidden;
        z-index: 10000;
        transition: transform .3s;
        transition-delay: 0.1s;

        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
    }
    .mod-select .content.toggle {
        transform: translateY(0);
    }
    .mod-select .content .head {
        position: relative;
        height: 100px;
        line-height: 100px;
        display: flex;
    }
    .content .btn-cancel {
        color: #666;
        font-size: 28px;
        position: absolute;
        left: 30px;
        top: 0;
    }
    .content .text {
        flex: 1;
    }
    .content ul li {
        height: 100px;
        line-height: 100px;
        border-top: 1px solid #eaeaea;
    }
    ul li .btn-check {
        width: 32px;
        height: 32px;
        background: url('../../assets/images/check-1@2x.png');
        background-size: 100%;
        margin-right: 12px;
        vertical-align: -5px;
        display: none;
    }
    li.cur .btn-check {
        display: inline-block;
    }
</style>
