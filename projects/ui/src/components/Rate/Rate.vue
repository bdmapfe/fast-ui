<template>
    <div class="rate-container">
        <div v-for="(item, index) in stars" class="rate-box">
            <div :class="['rate-item', {'rate-active': item.active === 1}]" :style="{
                transform: 'scale(' + item.scale + ')',
                'marginRight': spacing,
                'backgroundImage': item.active ? checkedIcon : uncheckedIcon
            }" @click="onClick($event, item, index)"></div>
        </div>
    </div>
</template>
<script>
    export default  {
        name: 'fast-rate',
        props: {
            // 评分数组，active为是否点亮样式，scale为缩放比例
            stars: {
                type: Array,
                default: function () {
                    return [
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
                    ]
                }
            },
            // 非点亮背景图片
            uncheckedIcon: {
                type: String,
                default: `url(data:image/png;base64,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)`
            },
            // 点亮背景图片
            checkedIcon: {
                type:String,
                default: `url(data:image/png;base64,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)`
            },
            // 是否支持点击事件
            readOnly: {
                type: Boolean,
                default: false
            },
            // icon间的间距值
            spacing: {
                type: String,
                default: '20px'
            }
        },
        methods: {
            onClick($event, idx, index) {
                if (!this.readOnly) {
                    this.$emit('click', idx, index);
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .rate-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .rate-box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .rate-item {
            width: 52px;
            height: 50px;
            background-image: url(../../assets/images/grey-star.png) no-repeat;
            background-size: cover;
            &.rate-active {
                background-image: url(../../assets/images/golden-star.png) no-repeat;
            }
        }
    }
</style>