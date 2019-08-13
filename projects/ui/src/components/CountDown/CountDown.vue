<template>
    <div class="fast-count-down">
        <div v-if="showActivity">
            <div v-for="(items, inde) in getActivityDateList(resttime)"
                 class="fast-activity-container"
                 :class="[color(items)]"
            >
                {{items}}
            </div>
        </div>
        <div v-else-if="showPlainText">
            <div>{{plainText}}</div>
        </div>
        <div v-else>
            <div v-if="resttime.d >= 0 && showDays" class="fast-count-down-d">
                <span>{{resttime.d}}</span>
                <span>天</span>
            </div>
            <span>{{resttime.h}}</span><span>{{colon}}</span><span>{{resttime.m}}</span><span>{{colon}}</span><span>{{resttime.s}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CountDown",
        data() {
            return {
                time: 0,
                // 动态赋值运营活动用汉字部分的class
                color(v) {
                    let text = ['天', '时', '分', '秒'];
                    if (text.includes(v)) {
                        return 'fast-activity-text'
                    }
                }
            }
        },
        props: {
            // 显示天
            showDays: {
                type: Boolean,
                default: false
            },
            // 开始时间，可以是服务端时间
            startTime: {
                type: [Number, String],
                validator(v) {
                    const dateStr = (new Date(v)).toString().toLowerCase();
                    return dateStr !== 'invalid date';
                }
            },
            // 结束时间
            endTime: {
                type: [Number, String],
                validator(v) {
                    const dateStr = (new Date(v)).toString().toLowerCase();
                    return dateStr !== 'invalid date';
                }
            },
            // 返回字符串
            showPlainText: {
                type: Boolean,
                default: false
            },
            // 符号
            colon: {
                type: String,
                default: ':'
            },
            // 运营活动用倒计时
            showActivity: {
                type: Boolean,
                default: false
            },
            // 活动用倒计时样式设置
            styleConfigs: {
                type: Object,
                require: true
            }
        },
        created() {
            const delay = 1000;
            const curr = Date.now();
            const start = this.getTimeStamp(this.startTime || curr);
            const end = this.getTimeStamp(this.endTime || curr);
            const diffTime = curr - start;

            this.time = end - (start + diffTime);
            this.timer = setInterval(() => {
                let time = end - (Date.now() + diffTime);
                this.time = time;
                if(time < delay) {
                    this.time = 0;
                    this.$emit('on-end');
                    clearInterval(this.timer);
                }
            }, delay);

        },
        mounted () {
            if (this.styleConfigs) {
                this.setConfig();
            }

        },
        computed: {
            // 对是否返回天，进行处理
            resttime() {
                const rest = this.restTime(this.time);
                const {d, h, m, s} = rest;
                if(!this.showDays && d > 0) {
                    rest.h = this.twoDigit(Number(rest.h) + d * 24);
                    rest.d = '00';
                }
                return rest;
            },
            // 返回倒计时的字符串
            plainText() {
                const {d, h, m, s} = this.resttime;
                return `${d > 0 && this.showDays? d + '天' + h: h}时${m}分${s}秒`;
            }
        },
        methods: {
            // 如果没有传入时间取系统时间
            getTimeStamp(timeStr) {
                if(!timeStr) {
                    return Date.now();
                } else {
                    let t = timeStr;
                    t = t > 0? +t: t.toString().replace(/\-/g, '/');
                    return new Date(t).getTime();
                }
            },
            // 保持两位数
            twoDigit(v) {
                v += '';
                while(v.length < 2) {
                    v = '0' + v;
                }
                return v;
            },
            // 将传入时间拆分为天，时，分，秒
            restTime(t) {
                const ts = t;
                let rest = {
                    d: '-',
                    h: '--',
                    m: '--',
                    s: '--'
                };
                if(ts === 0) {
                    rest = {
                        d: '00',
                        h: '00',
                        m: '00',
                        s: '00'
                    };
                }
                if(ts) {
                    const ds = 24 * 60 * 60 * 1000;
                    const hs = 60 * 60 * 1000;
                    const ms = 60 * 1000;

                    const d = ts >= ds? parseInt(ts / ds): 0;
                    const h = ts - d*ds >= hs? parseInt((ts - d*ds) / hs): 0;
                    const m = ts - d*ds - h*hs >= ms? parseInt((ts - d*ds - h*hs) / ms): 0;
                    const s = Math.round((ts - d*ds - h*hs - m*ms) / 1000);

                    if(d >= 0) {
                        rest.d = this.twoDigit(d);
                    }
                    if(h >= 0) {
                        rest.h = this.twoDigit(h);
                    }
                    if(m >= 0) {
                        rest.m = this.twoDigit(m);
                    }
                    if(s >= 0) {
                        rest.s = this.twoDigit(s);
                    }

                }
                return rest;
            },
            // 活动用倒计时返回数组遍历
            getActivityDateList(list) {
                if (list.d >= 0 && this.showDays) {
                    return [...list.d.split(''), '天', ...list.h.split(''), '时', ...list.m.split(''), '分'];
                }
                else {
                    return [...list.h.split(''), '时', ...list.m.split(''), '分', ...list.s.split(''), '秒'];
                }
            },
            // 样式赋值
            setConfig () {
                this.$el.style.setProperty('--activityWidth', `${this.styleConfigs.activityWidth}rem`);
                this.$el.style.setProperty('--activityHeight', `${this.styleConfigs.activityHeight}rem`);
                this.$el.style.setProperty('--numBg', `${this.styleConfigs.numBg}`);
                this.$el.style.setProperty('--numColor', `${this.styleConfigs.numColor}`);
                this.$el.style.setProperty('--numSize', `${this.styleConfigs.numSize}`);
                this.$el.style.setProperty('--textBg', `${this.styleConfigs.textBg}`);
                this.$el.style.setProperty('--textColor', `${this.styleConfigs.textColor}`);
                this.$el.style.setProperty('--textSize', `${this.styleConfigs.textSize}rem`);
            },
        }
    }

</script>

<style scoped lang="scss">
    $activityWidth: var(--activityWidth);
    $activityWidth: var(--activityHeight);
    $numBg: var(--numBg);
    $numColor: var(--numColor);
    $numSize: var(--numSize);
    $textBg: var(--textBg);
    $textColor: var(--textColor);
    $textSize: var(--textSize);
    .fast-count-down {
        .fast-activity-container {
            display: inline-block;
            width: $activityWidth;
            height: $activityWidth;
            line-height: .6rem;
            background-color: $numBg;
            color: $numColor;
            font-size: $numSize;
            text-align: center;
            margin-right: 5px;
            border-radius: 5px;
        }
        .fast-activity-text {
            background-color: $textBg;
            color: $textColor;
            font-size: $textSize;
        }
        .fast-count-down-d {
            display: inline-block;
        }
    }
</style>
