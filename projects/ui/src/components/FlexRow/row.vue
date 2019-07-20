<template>
    <div class="fast-flex-row" :class="classObject">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'fast-flex-row',
        props: {
            // 主轴方向上
            justify: {
                type: String,
                default: 'start'
            },
            // 次轴方向上
            align: {
                type: String,
                default: 'start'
            },
            // 是否换行
            wrap: {
                type: String,
                default: 'nowrap'
            }
        },
        data() {
            return {
                classObject: {
                    'fast-row-justify-center': this.justify === 'center',
                    'fast-row-justify-end': this.justify === 'end',
                    'fast-row-justify-space-between': this.justify === 'space-between',
                    'fast-row-justify-space-around': this.justify === 'space-around',
                    'fast-row-align-center': this.align === 'center',
                    'fast-row-align-end': this.align === 'end',
                    'fast-row-wrap': this.wrap === 'wrap',
                    'fast-row-reverse': this.wrap === 'reverse'
                }
            };
        }
    }
</script>

<style lang="scss" scoped>
    .fast-flex-row {
        display: flex;
    }
    .fast-row-justify-center{
        justify-content: center;
    }
    .fast-row-justify-end {
        justify-content: flex-end;
    }
    .fast-row-justify-space-between{
        justify-content: space-between;
        align-items: center;
    }
    .fast-row-justify-space-around {
        justify-content: space-around;
    }
    .fast-row-align-start {
        align-items: flex-start;
    }
    .fast-row-align-center {
        align-items: center;
    }
    .fast-row-align-end {
        align-items: flex-end;
    }
    .fast-row-wrap {
        flex-wrap: wrap;
    }
    .fast-row-nowrap {
        flex-wrap: nowrap;
    }
    .fast-row-reverse {
        flex-wrap: wrap-reverse;
    }
</style>
