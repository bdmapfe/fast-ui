<template>
    <label :class="['checkout-container','checkout-size-'+size]">
        <input @change="changeEvt" :class="{'checkout-choice': checkbox,'checkbox-ani':animation}" type="checkbox" :name="name" @click = "getfocus" />
        <label v-if="label" class="checkout-label">{{label}}</label>
        <label v-else class="checkout-label">
            <slot></slot>
        </label>
    </label>
</template>

<script>
import { Stream } from 'stream';
export default {
    name: "CheckBox",
    data() {
        return {

        }
    },
    model: {
        prop: 'checkbox',
        event: 'focus'
    },
    props:{
        name: {
            type: String
        },
        checkbox: {
            type: Boolean,
        },
        label: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'base'
        },
        animation: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        getfocus: function() {
            this.$emit('focus',!this.checkbox);
        },
        changeEvt(event) {
            this.$emit('change');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/public.scss";
@import "../../libs/css/pulse.scss";
    .checkout-container {
        position: relative;

        .checkout-label {
            position: relative;
            font-size: $font-size-normal;
            vertical-align: middle;

        }

        input {
            position: relative;
            width: 30px;
            height: 30px;
            border: 1px gray solid;
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            margin-top: 0px;
            margin-right: 5px;

            &::after {
                position: absolute;
                left: 50%;
                top: 50%;
                content: '';
                width: 0;
                height: 0;
                transform: translate(-50%, -50%);
                background: $primary-color;
                border-radius: 50%;
                opacity: 0;
                pointer-events: none;
                background: #3385ff;
            }
        }
        .checkout-choice {
            background-color: #3385ff;
            background-image: url(data:image/png;base64,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);
            background-size: 20px 20px;
            background-repeat:no-repeat;
            background-position: center;
            border-color: #3385ff;
            &:not(:disabled).checkbox-ani::after {
                animation: nutPulse 1s;
            }
        }

        &.checkout-size-small {
            input {
                width: 20px;
                height: 20px;
            }
            .checkbox-label {
                
            }
        }

        &.checkout-size-base {
            input {
                width: 30px;
                height: 30px;
            }
            .checkbox-label {

            }
        }

        &.checkout-size-large {
            input {
                width: 40px;
                height: 40px;
            }
            .checkbox-label {
                
            }
        }
    }
</style>


