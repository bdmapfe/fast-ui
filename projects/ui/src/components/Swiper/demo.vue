<template>
    <div class="app">
        <div class="swiper-container">
            <fast-swiper :type="swiperType" :page-transition="pageTransition" :loop="loop" :autoplay="autoplay"
                    :interval="interval" :show-indicator="showIndicator" @beforeChange="beforeChange"
                    @afterChange="afterChange">
                <fast-swiper-item v-for="(color, index) in colors" :key="index">
                    <div :style="{backgroundColor: color}" class="swiper-item-content">
                        <div>{{index + 1}}</div>
                    </div>
                </fast-swiper-item>
            </fast-swiper>
        </div>
        <div class="operation-card">
            <p class="opertaion-item">Swiper Type</p>
            <fast-radiogroup v-model="swiperType" :animated="false">
                <fast-radio v-for="item in swiperTypes" :label="item">{{item}}</fast-radio>
            </fast-radiogroup>
            <!--<select v-model="swiperType" class="select-container">
                <option v-for="(item, index) in swiperTypes" :key="index" :label="item" :value="item"></option>
            </select>-->
            <p class="opertaion-item">Swipe Transition</p>
            <select v-model="pageTransition" class="select-container">
                <option v-for="(item, index) in pageTransitions" :key="index" :label="item" :value="item"></option>
            </select>
            <p class="opertaion-item">Autoplay</p>
            <fast-switch v-model="autoplay"></fast-switch>
            <p class="opertaion-item">Interval</p>
            <fast-input placeholder="请输入自动播放时间" :disabled="!autoplay" :clear-btn-exist="false" v-model="interval"></fast-input>
            <p class="opertaion-item">Loop</p>
            <fast-switch v-model="loop"></fast-switch>
            <p class="opertaion-item">Show Indicator</p>
            <fast-switch v-model="showIndicator"></fast-switch>
        </div>
    </div>
</template>

<script>
    import fastRadio from '../Radio/Radio';
    import fastInput from '../Input/Input';
    import fastRadiogroup from '../Radiogroup/Radiogroup';
    import fastSwitch from '../Switch/Switch';
    import fastSwiper from './Swiper.vue';
    import fastSwiperItem from './SwiperItem.vue';

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
            fastRadio,
            fastRadiogroup,
            fastInput,
            fastSwitch,
            fastSwiper,
            fastSwiperItem
        },

        data() {
            return {
                // swiper的类型，支持vertical和horizontal两种形式
                swiperType: 'horizontal',
                swiperTypes: [
                    'horizontal',
                    'vertical'
                ],
                colors: [
                    '#76D7C4',
                    '#F1948A',
                    '#BB8FCE',
                    '#7FB3D5'
                ],
                loop: true,
                autoplay: true,
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
            overflow: hidden;
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
            .opertaion-item {
                padding: 16px;
            }
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
