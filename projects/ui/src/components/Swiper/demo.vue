<template>
    <div class="app">
        <div class="swiper-container">
            <swiper :page-transition="pageTransition" :loop="loop" :autoplay="autoplay"
                    :interval="interval" :show-indicator="showIndicator" @beforeChange="beforeChange"
                    @afterChange="afterChange">
                <swiper-item v-for="(color, index) in colors" :key="index">
                    <div :style="{backgroundColor: color}" class="swiper-item-content">
                        <div>{{index + 1}}</div>
                    </div>
                </swiper-item>
            </swiper>
        </div>
        <div class="operation-card">
            <p>swipe Transition</p>
            <select v-model="pageTransition" class="select-container">
                <option v-for="(item, index) in pageTransitions" :key="index" :label="item" :value="item"></option>
            </select>
            <p>Autoplay</p>
            <input class="checkbox-box" type="checkbox" v-model="autoplay"/>autoplay
            <p>Interval</p>
            <input :disabled="!autoplay" controls-position="right" v-model="interval" :min="100" :max="10000" :step="100"/>
            <p>Loop</p>
            <input class="checkbox-box" type="checkbox" v-model="loop"/>
            <p>Show Indicator</p>
            <input class="checkbox-box" type="checkbox" v-model="showIndicator"/>
        </div>
    </div>
</template>

<script>
    import Swiper from './Swiper.vue';
    import SwiperItem from './SwiperItem.vue';
    import CheckBox from "../../../../docs/src/views/CheckBox";

    const PAGE_TRANSITIONS = [
        'move',
        'fade',
        'cover',
        'carousel',
        'scale',
        'glue',
        'cube',
        'push',
        'three'
    ];

    export default {
        components: {
            CheckBox,
            Swiper,
            SwiperItem
        },

        data() {
            return {
                colors: [
                    '#76D7C4',
                    '#F1948A',
                    '#BB8FCE',
                    '#7FB3D5'
                ],
                loop: true,
                autoplay: false,
                interval: 1000,
                showIndicator: false,
                pageTransition: PAGE_TRANSITIONS[0],
                pageTransitions: PAGE_TRANSITIONS,
            };
        },

        methods: {
            beforeChange(activeIndex, oldIndex) {
                console.log(`before-change: ${activeIndex}, ${oldIndex}`);
            },

            afterChange(activeIndex, oldIndex) {
                console.log(`after-change: ${activeIndex}, ${oldIndex}`);
            }
        }
    };
</script>

<style lang="scss">
    body {
        margin: 0;
    }

    .app {
        position: relative;
        .swiper-container {
            position: relative;
            height: 300px;
            overflow-y: hidden;
        }
        .swiper-item-content {
            position: absolute;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 100px;
        }

        .operation-card {
            background-color: #fff;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            padding: 30px;
            .select-container {
                border: 2px solid #EBEEF5;
                background-color: #FFF;
            }
            .checkbox-box {
                height: 24px;
                width: 24px;
                border: 2px #333 solid;
                display: inline-block;
            }

        }
    }
</style>
