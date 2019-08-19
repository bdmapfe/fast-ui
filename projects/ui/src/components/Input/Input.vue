<template>
    <div class="fast-input-container">
        <label class="fast-input-label" v-if="label">{{label}}</label>
        <input class="fast-input" :class="{'disabled': disabled}" :style="styleObject"
               :type="type" :value="value" :placeholder="placeholder" :disabled="disabled"
               :readonly="readonly" :maxlength="maxlength"
               @input="inputHandler" @blur="blurHandler" @focus="focusHandler"
        >
        <span class="fast-input-clear" v-if="clearBtnExist" v-show="clearBtnShow" @click="clearText">

        </span>
    </div>
</template>

<script>
    export default {
        name: 'Input',
        props: {
            value: {
                type: [String, Number, Boolean],
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: '请输入相应内容'
            },
            disabled: {
                type: [Boolean, String],
                default: false
            },
            readonly: {
                type: [Boolean, String],
                default: false
            },
            maxlength: {
                type: [String, Number],
                default: 100
            },
            hasBorder: {
                type: [Boolean, String],
                default: true
            },
            border: {
                type: String,
                default: '1px solid #ededed'
            },
            hasOutline: {
                type: [Boolean, String],
                default: false
            },
            outline: {
                type: String,
                default: '1px solid #3385ff'
            },
            hasBgColor: {
                type: Boolean,
                default: false
            },
            bgColor: {
                type: String,
                default: '#f9f8f7'
            },
            hasPadding: {
                type: [Boolean, String],
                default: true
            },
            padding: {
                type: String,
                default: '10px 15px'
            },
            clearBtnExist: {
                type: [Boolean, String],
                default: true
            }
        },
        data() {
            return {
                clearBtnShow: true
            }
        },
        computed: {
            styleObject() {
                return {
                    border: this.hasBorder ? this.border : 'none',
                    outline: this.hasOutline ? this.outline : 'none',
                    backgroundColor: this.hasBgColor ? this.bgColor : '#fff',
                    padding: this.hasPadding ? this.padding : 'auto 0'
                }
            }
        },
        methods: {
            clearText() {
                this.$emit('clear');
                this.$emit('input', '');
                this.clearBtnShow = false;
            },
            inputHandler(event) {
                const value = event.target.value;
                this.clearBtnShow = !!value;
                this.$emit('input', value);
            },
            blurHandler() {
                this.$emit('blur', this.value);
            },
            focusHandler() {
                this.$emit('focus', this.value);
            }

        },
        mounted() {
            this.clearBtnShow = !!this.value;
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../libs/css/public.scss";
    .fast-input-container {
        @include flex();
        align-items: center;
        height: $height-cell-one-line;
        position: relative;
        .fast-input-label {
            font-size: $font-size-normal;
        }
        .fast-input {
            flex: 1;
            font-size: $font-size-normal;
            border-radius: 4px;
            &::-webkit-input-placeholder {
                font-size: $font-size-minor;
                color: $text-color-minor;
            }
            &.disabled {
                opacity: .6;
            }
        }
        .fast-input-clear {
            position: absolute;
            right: 16px;
            top: 50%;
            width: 36px;
            height: 36px;
            transform: translateY(-50%);
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA81JREFUWAnNmMtO20AUhsdOuAfUcAkXiXLJqq8Q2iWLqt10w1tUXVTqQ1TqAvEW3XQD6iLdUXgFVkBCJQrh0gLlIkhIzzcau3ZqO3YCiCONPJ5z+33mzJkZWyohlcvlbK1WeyVq89KeSpuo1+sTmLEsa1cetB1pxVQqtTI1NfVL+rHJiitZKpXeCJC3Iv9CWjqmXlXkVgXY0vT09Jc4Ok0BSUTmqtXqRzFWiGMwQmY9nU5/kIitRcioUEAyDamtra1PovwuykALvMXZ2dn3Mr21IN1AQNvb208E0Gdp5Mmdk4ApSluYmZn53Wj8P0AGzLqAedYofJfvAmhDWqERlO11wjSZyNwrGHzywcZXyovBB4icEaF7mSavU6ePL5OnztC/pDar6bvLecCOrL7nzupzI2SWdiiM29tbwhzKD2Ogg24UeX1rQBQ9UQitM7Ztq97eXipxlN1AHjroYiOCCgaD0lKmAofKd3Z2qrGxMZXNZkNlwhjooNvR0REmoscdDBZ7k4SsIqOR20F/f78aGhpSp6en6vj4ONK4wxwcHFQDAwPq6OhInZ2dOcNhz6rkUi4tyF6LRCQYLGBQZFUul9Phx0lYTjFNgM9kMqpSqaiLi4swEN5xjYUpi73MMby/v6/6+vrU8PBwYE4BBh4yyMYE4wCbB9Ck8xbneXl5qR2RqCMjI75kJXEZgwcYZBPSJID0WSaJ4tXVldrb21Pd3d3uFAKG6WQMHjIt0IS1ublJtmVaUFasPkCQW5Cce3TOXF9ft2IOnT9EKHm1M+5wfHh4qHp6enSj3wYYrNZtScKfxn7iBxEigckVGn3GWiWwECHOwInJKZZSw3QCk8T0KYJtgNoF0E5SNF1dXWp8fFwnLnWGvYpGn2SGh0wLtAOgb0kUyReiQH05ODjwbZyAYgweMsgmpKItK2NZlLgdNCXqy+joqDo/P9fJHFSpGSO5kUEWnZhUFSwrtrk3rTZTYi9jibOX4TAIjGPDAYUsOujGoFWwMGXUj6UoBfKBvenk5CT2xoo9NmF00G2WUw4G94AjBXJNbASeidifZCfWNYZ+EiJaHD0onhFRXc/n83PY1RGiwyWOZxBh6ObmJnAzDZL3jvEBlIMIMD7fLiBzpl30Gnug/qJznsafL/7yFSm5l32VZ+wjSTugJXpFuZe9lKd7i3UjpNEJQ5gL0jbacRRHFx/GlwsGPR8gBrhJimBBWpH3+yBs46Px1oov35R5nTN9j+ZngxfYo/kd4wVFv/RYflg1AuPaZG4qrETO40G/9H7IOL/0ls3W1Ggm9P0vHIXQpX4Rie0AAAAASUVORK5CYII=);
            background-size: 36px 36px;
        }
    }

</style>
