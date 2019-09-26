# NumberCountUp
> 支持数字电表滚动效果

## 基本用法

通过isShow控制显隐，通过data传入数据

```html
    <number-count-up :setting="numInfo"></number-count-up>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| setting | 数字动效设置 | Object | --
| setting.numList | 支持滚动的数字集| Array | ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
| setting.num | 要展示的数字 | Number | 1
| setting.dot | 要展示的数字保留几位小数 | Number | 0
| isShowAni | 是否要展示动效 | Number | 0
