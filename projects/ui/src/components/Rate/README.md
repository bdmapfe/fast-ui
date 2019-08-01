# Rate 评分
> 星级打分

## 基础用法

```html
<fast-cell>
    <span slot="cell-center-slot"><fast-rate></fast-rate></span>
</fast-cell>
```

只读
```html
<fast-cell>
    <span slot="cell-center-slot"><fast-rate :readOnly="true"></fast-rate></span>
</fast-cell>
```

缩放大小

```html
<fast-cell>
    <span slot="cell-center-slot"><fast-rate :stars="starScale"></fast-rate></span>
</fast-cell>
```

调整间距

```html
<fast-cell>
    <span slot="cell-center-slot"><fast-rate :spacing="spacing"></fast-rate></span>
</fast-cell>
```

事件

```html
<nut-rate 
    @click="onClick"
>
</nut-rate>
```

自定义图标

```html
<nut-rate
    :checkedIcon="icon1"
    :uncheckedIcon="icon2"
></nut-rate>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
| ----- | ----- | ----- | -----
| stars | star 数组 | Array | -
| stars.acitve | 当前 star 是否点亮 | Number | 1
| stars.scale | 当前 star 缩放比例 | Number | 1
| spacing | 两个star的间距 | String | 20px
| readOnly | 是否只读 | Boolean | false
| uncheckedIcon | 未点亮图标 | String | -
| checkedIcon | 点亮图标 | String | -

## Event
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| click | 点击star时触发 | star的item, index