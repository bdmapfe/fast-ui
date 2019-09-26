<template>
    <div class="fast-progress">
        <div class="fast-progress-outer" :class="[showText? 'fast-progress-outer-part' :'','fast-progress-base']" :style="{height: strokeWidth + 'px'}" v-if="type === 'line'">
            <div class="fast-progress-inner fast_active" :style="bgStyle">
                <div class="fast-progress-text" :style="{lineHeight:strokeWidth + 'px'}" v-if="showText"> {{percentage}}%</div>
            </div>
        </div>
        <div class="el-progress-circle" :style="{height: circleObj.strokeWidth + 'px', width: circleObj.strokeWidth + 'px'}" v-else>
            <svg viewBox="0 0 100 100">
                <path class="el-progress-circle__track" :d="trackPath" stroke="#e5e9f2" :stroke-width="relativeStrokeWidth" fill="none" :style="trailPathStyle"></path>
                <path class="el-progress-circle__path" :d="trackPath" :stroke="circleObj.color" fill="none" stroke-linecap="round" :stroke-width="myPercentage ? relativeStrokeWidth : 0" :style="circlePathStyle"></path>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProgressBar',
    props: {
        percentage: {
            type: [Number, String],
            default: 0,
            required: false
        },
        strokeWidth: {
            type: [Number, String],
            default: ''
        },
        showText: {
            type: Boolean,
            default: true
        },
        strokeColor: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        },
        textInside: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'line'
        },
        circleObj: {
            type: Object,
            default () {
                return {
                    width: 6,
                    strokeWidth: 126,
                    color: "#3385ff"
                };
            }
        }
    },
    data() {
        return {
            myPercentage: "0"
        };
    },
    mounted() {
        let me = this;
        if (this.active) {
            setTimeout(function() {
                me.myPercentage = me.percentage;
            }, 1)

        } else {
            me.myPercentage = me.percentage;
        }

    },
    computed: {
        bgStyle() {
            const style = {};
            style.width = this.myPercentage + '%';
            style.backgroundColor = this.strokeColor || '';
            return style;
        },
        relativeStrokeWidth() {
            return (this.circleObj.width / this.circleObj.strokeWidth * 100).toFixed(1);
        },
        trackPath() {
            const radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
            return `
              M 50 50
              m 0 ${'-'}${radius}
              a ${radius} ${radius} 0 1 1 0 ${radius * 2}
              a ${radius} ${radius} 0 1 1 0 ${'-'}${radius * 2}
            `;
        },
        perimeter() {
            return 2 * Math.PI * parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
        },
        trailPathStyle() {
            return {
                strokeDasharray: `${(this.perimeter)}px, ${this.perimeter}px`,
            };
        },
        circlePathStyle() {
            return {
                strokeDasharray: `${this.perimeter * (this.myPercentage / 100) }px, ${this.perimeter}px`,
                transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
            };
        },
    },
    methods: {}
}
</script>
<style lang="scss" scoped>
@import "../../libs/css/public.scss";

.fast-progress {
    position: relative;
    display: flex;

    .fast-progress-outer {
        flex: 1;
        background-color: $card-color-bg-pressed;
        border-radius: 100px;
        overflow: hidden;
        height: 20px;

        .fast-progress-inner {
            width: 30%;
            height: 100%;
            background-color: $assist-blue-color;
            -webkit-transition: all 5s;
            transition: all 5s;
            position: relative;
            border-radius: 100px;

            .fast-progress-text {
                height: 100%;
                display: flex;
                flex-direction: row-reverse;
                // justify-content: center;
                align-items:center;
                color: #FFF;
            }
        }

        &.fast-progress-base {
            height: 20px;

            .fast-progress-text {
                font-size: 12px;
                line-height: 16px;
            }
        }
    }

    .fast-progress-outer-part {
        width: 90%;
    }

    .fast-progress-text {
        padding: 0 5px;
        font-size: 12px;
        line-height: 1;
    }

}
</style>