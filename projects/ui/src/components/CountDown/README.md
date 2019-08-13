## CountDown
> 倒计时组件，分为普通倒计时和运营活动用倒计时

## 基本用法


```html
    <count-down :endTime="end" :show-activity="true" :show-days="true" :style-configs="configs"></count-down>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| showDays | 显示天 | Boolean | false
| startTime | 开始时间 | [Number, String] | 服务端时间
| endTime | 结束时间 | [Number, String] | 服务端时间
| showPlainText | 直接返回字符串 | Boolean | false
| colon | 时间之间分隔符 | String | ':'
| showActivity | 运营活动用倒计时 | Boolean | false
| styleConfigs | 运营活动用倒计时样式 | Object | 


## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| on-end | 倒计时结束 |  

