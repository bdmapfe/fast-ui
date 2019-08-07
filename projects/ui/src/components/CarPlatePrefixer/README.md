# CarPlatePrefixer

> 车主业务组件：选择车牌归属地面板，依赖ActionSheet组件。

## 基本用法

```html
 <fast-car-plate-prefixer 
    :is-visible="prefixerVisible"
    @changePrefixer="platePrefixerChanged"
    @close="switchVisible()">
</fast-car-plate-prefixer>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| isVisible | 是否显示操作面板 | Boolean | false



## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| close | 关闭面板 | 
| changePrefixer | 切换车牌归属地 | choosedValue  
