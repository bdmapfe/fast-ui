<template>
    <div class="fast-column" :class="classObject" :style="{margin: margin}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "fast-flex-column",
        props: {
            span: {
                type: [String, Number],
                default: 10,
            },
            offset: {
                type: [String, Number],
                default: 0,
            },
            margin: {
                type: String,
                default: '0 0 0 0'
            }
        },
        computed: {
            classObject() {
                const result = {};
                Object.assign(result, {
                    ['fast-col-' + this.span]: true,
                    ['fast-col-offset-' + this.offset]: true
                });
                return result;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fast-column {
        box-sizing: border-box;
    }
    @for $i from 1 through 10 {
        .fast-col-#{$i}{
            width: 10*$i*1%;
        }
        .fast-col-offset-#{$i} {
            margin-left: 10*$i*1%;
        }
    }
</style>
