## Swiper
> 滑动翻页展示，支持 vertical 和 horizontal 两种模式，每种模式下支持Autoplay、Loop、Show Indicator，
另外翻页效果支持：move、fade、cover、carousel、scale、glue、cube、push、three等效果。

## 基本用法

swiper的能力是通过Swiper和SwiperItem组合来实现，Swipe为container，SwiperItem通过slot完成content填充。
其中对手势的识别是基于`better-scroll`做的。

```html
    <div class="swiper-container">
        <fast-swiper :type="swiperType" :page-transition="pageTransition" :loop="loop" 
            :autoplay="autoplay" :interval="interval" :show-indicator="showIndicator"
             @beforeChange="beforeChange" @afterChange="afterChange">
            <fast-swiper-item v-for="(color, index) in colors" :key="index">
                <!-- swiper-item的slot -->
                <div :style="{backgroundColor: color}" class="swiper-item-content">
                    <div>{{index + 1}}</div>
                </div>
            </fast-swiper-item>
        </fast-swiper>
    </div>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | swiper翻页类型（vertical、horizontal） | String | 'vertical'
| pageTransition | 翻页动效（move、fade、cover、carousel、scale、glue、cube、push、three） | String | 'move'
| loop | 是否支持循环 | Boolean | true
| autoplay | 是否支持自动切换 | Boolean | false
| interval | 自动切换的时间间隔，只有自动模式下有效，单位为ms | Number | 3000
| showIndicator | 是否显示进度Dot | Boolean | false


## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| beforeChange | 即将发生翻页 | activeIndex，oldIndex 
| afterChange | 发生翻页 | activeIndex，oldIndex  
