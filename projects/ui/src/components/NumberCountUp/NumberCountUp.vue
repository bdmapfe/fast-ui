<template>
    <div class="number-count-up" ref="ani-container">
        <div class="number-container" v-for="animationNum in animationNumArray">
            <div v-ani:[options]="animationNum" v-if="isShowAni">
                <div v-for="num in options.numList" class="number-item">
                    <div class="number">
                        {{num}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NumberCountUp",
        directives: {
            ani: {
                inserted(el, binding) {
                    const options = binding.arg;
                    const startAnimation = ()=> {
                        const aniTarget = binding.value;
                        const targetIndex = options.numList.indexOf(aniTarget);
                        const aniItem = el.firstElementChild;
                        // 获取精准高度，clientHeight会四舍五入，导致数字错位
                        const preciseHeight = parseFloat(window.getComputedStyle(aniItem).height);
                        const translateY = -targetIndex * preciseHeight + 'px';
                        const translateYStyle = 'translateY(' + translateY + ')';
                        const transitionStyle = options.speed + 'ms ease-in-out';

                        el.style.transform = translateYStyle;
                        el.style.msTransform = translateYStyle;
                        el.style.webkitTransform = translateYStyle;

                        el.style.transition = transitionStyle;
                        el.style.msTransition = transitionStyle;
                        el.style.webkitTransition = transitionStyle;
                    };
                    startAnimation(el);
                },
            }
        },
        props: {
            setting: {},
            isShowAni: {
                type: Boolean,
                value: false
            }
        },
        data() {
            return  {
                options: {
                    numList: ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
                    speed: 1000, // 动画速度
                    num: '1', // 初始化值
                    dot: 0 // 保留几位小数点
                },
                animationNumArray: []
            }
        },
        activated() {
            Object.assign(this.options, this.setting);
            this.animationNumArray = this.numToArr(this.options.num);
        },
        methods: {
            numToArr(num) {
                num = parseFloat(num).toFixed(this.options.dot);
                return num.toString().split("");
            },
        }
    }
</script>

<style lang="scss" scoped>
    .number-count-up {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .number-container {
        overflow: hidden;
        flex: 1;
        height: 80px;
    }
    .number {
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
</style>
