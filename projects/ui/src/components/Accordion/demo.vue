<template>
    <div class="app-container">
        <!--基本用法-->
        <h4>基本用法</h4>
        <div class="accordion">
            <Accordion :datas="accordionData"></Accordion>
        </div>

        <h4>Slot</h4>
        <div class="accordion">
            <Accordion :datas="accordionData">
                <div slot="accordion-header">
                    <div class="accordion-header-icon">问</div>
                </div>

                <div slot="accordion-body">
                    <div class="concat-line"></div>
                    <div class="accordion-content-icon">答</div>
                </div>
            </Accordion>
        </div>

        <h4>禁用默认，使用Slot</h4>
        <div class="accordion">
            <Accordion :defaultLayout="false">
                <div slot="accordion-header">
                    <h2 class="accordion-title">这是一个测试用例title</h2>
                </div>

                <div slot="accordion-body">
                    <h2 class="accordion-content" style="color: red;">这是一个测试用例content</h2>
                </div>
            </Accordion>
        </div>
    </div>
</template>

<script>
    import Accordion from  './Accordion.vue';

    export default {
        name: "Cell.demo.vue",

        data() {
            return {
                accordionData: [
                    {
                        title: '请输入一个问题1？',
                        content: '这里是问题1答案展示区'
                    },
                    {
                        title: '请输入一个问题2？',
                        content: '这里是问题2答案展示区'
                    },
                    {
                        title: '请输入一个问题3？',
                        content: '这里是问题2答案展示区'
                    },
                    {
                        title: '请输入一个问题4？',
                        content: '这里是问题2答案展示区'
                    }
                ]
            }
        },

        components: {
            Accordion
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

        .accordion {
            background-color: #FFF;
            padding: 0 30px;

            .accordion-header-icon,
            .accordion-content-icon {
                flex-shrink: 0;
                width: 34px;
                height: 34px;
                color: #FFF;
                font-size: 20px;
                border-radius: 50%;
                text-align: center;
                line-height: 34px;
                margin-right: 8px;
            }

            .accordion-header-icon {
                background-image: linear-gradient(180deg, #4790FC 1%, #3385FF 60%, #2977EC 100%);
            }

            .concat-line {
                position: absolute;
                left: 16px;
                top: -22px;
                width: 2px;
                height: 17px;
                background-color: #3385FF;
                border-radius: 2px;
            }

            .accordion-content-icon {
                border: 2px solid #3385FF;
                color: #3385FF;
            }
        }
    }
</style>
