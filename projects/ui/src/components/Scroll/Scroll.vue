<template>
    <div ref="scrollWrapper" class="scroll-wrapper">
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
    import BScroll from 'better-scroll'
    export default {
        data() {
            return{
                project: null,
                pos:0
            }
        },
        props: {
            probeType: {
                //probeType: 1 滚动的时候会派发scroll事件，会截流(就开始触发一下)。2滚动的时候实时派发scroll事件，不会截流(鼠标在上面触发)。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件（鼠标离开，自己滚也触发）
                type: Number,
                default: 1
            },
            click: {
                type: Boolean,
                default: true
            },
            listenScroll: {
                type: Boolean,
                default: false
            },
            object: {
                type: Object,
                default: null
            },
            data: {
                type: Array,
                default: null
            },
            string: {
                type: String,
                default: ''
            },
            pullup: {
                type: Boolean,
                default: false
            },
            pullleft: {
                type: Boolean,
                default: false
            },
            beforeScroll: {
                type: Boolean,
                default: false
            },
            refreshDelay: {
                type: Number,
                default: 500
            },
            forceRefresh: {}
        },

        created() {
            this.project = window.project;
            if (this.project === 'insPage' || this.project === 'infoPage' || this.project === 'activityVue') {
                setTimeout(() => {
                    this._initScroll();
                }, 20)
            }
        },

        methods: {
            _initScroll() {
                if (!this.$refs.scrollWrapper) {
                    return;
                }

                let params, defaultParams = {
                    probeType: 1,
                    hasTouch: true,
                    click: this.click,
                    scrollbar: true,
                    scrollY: true
                };
                switch (this.project) {
                    case 'insPage':
                        params = defaultParams;
                        break;
                    case 'activityVue':
                        params = defaultParams;
                        break;
                    case 'legal':
                        params = {
                            probeType: this.probeType,
                            scrollX: true,
                            scrollY: true,
                            snap: true,
                            bindToWrapper: true,
                            // freeScroll: true,
                            eventPassthrough: 'vertical',
                            click: this.click,
                            HWCompositing: false // 关闭硬件加速，不加translateZ(0)避免ios上出现白屏问题
                        };
                    case 'infoPage':
                        params = defaultParams;
                        params.probeType = this.probeType;
                        break;
                    default:
                        params = defaultParams;
                        break;
                }
                this.scroll = new BScroll(this.$refs.scrollWrapper, params);

                if (this.project === 'legal') {
                    this.aboutScroll();
                }

            },
            aboutScroll() {
                if (this.listenScroll) {
                    // pos为位置参数
                    this.scroll.on('scroll', (pos) => {
                        let option;
                        if (this.project === 'infoPage') {
                            option = {current: this.scroll.y, max: this.scroll.maxScrollY}
                        } else {
                            option = pos;
                        }
                        this.$emit('scroll', option);
                    })
                }

                if (this.pullup) {
                    this.scroll.on('scrollEnd', () => {
                        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                            this.$emit('scrollToEnd');
                        }
                    })
                }

                this.scroll.on('scrollEnd', () => {
                    let pageIndex = this.scroll.getCurrentPage().pageX;
                    this.currentPageIndex = pageIndex;
                    this.$emit('scrollEnd', pageIndex);
                });

                if (this.pullleft) {
                    this.scroll.on('scrollEnd', () => {
                        if (this.scroll.x <= (this.scroll.maxScrollX + 50)) {
                            this.$emit('scrollToEnd');
                        }
                    })
                }

                if (this.beforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScroll');
                    })
                }
            },
            disable () {
                this.scroll && this.scroll.disable()
            },
            enable () {
                this.scroll && this.scroll.enable()
            },
            refresh () {
                this.scroll && this.scroll.refresh()
            },
            scrollToElement(el) {
                // 参数为0表示没有动画，瞬间移动到该位置
                this.scroll.scrollToElement(el,0);
            },
            scrollTo() {
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
            },
            scrollToElement() {
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
            }
        },
        watch: {
            forceRefresh(value) {
                if (value) {
                    this.refresh();
                }
            },
            data() {
                setTimeout(() => {
                    this._setScrollWidth();
                    this._initScroll();
                }, 500);
            },
            string() {
                setTimeout(() => {
                    this.refresh();
                }, this.refreshDelay);
            },
            object() {
                setTimeout(() => {
                    this.refresh();
                }, this.refreshDelay);
            }
        }
    }
</script>

<style>
    .scroll-wrapper {
        flex: 1;
    }
</style>
