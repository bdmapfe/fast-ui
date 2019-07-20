# Flex布局
> 支持Flex 一维横向布局，主要的使用场景就是使用flex做横向布局。

## 基本用法

通过`fast-flex-row`与`fast-flex-column`搭配使用，主要是将屏幕横向划分了10个等份，类似rem适配分案。

```html
    <fast-flex-row>
        <fast-flex-column span="3">
            <div class="test-item">span:3</div>
        </fast-flex-column>
        <fast-flex-column span="3">
            <div class="test-item light">span:3</div>
        </fast-flex-column>
        <fast-flex-column span="3">
            <div class="test-item">span:3</div>
        </fast-flex-column>
    </fast-flex-row>
```

## Props

### fast-flex-row

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| justify | 设置flex的主轴justify-content属性 | String | start
| align | 设置flex的次轴align-item属性 | String | start
| wrap | 设置flex是否换行 | String | nowrap

### fast-flex-column

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| span | column宽度 | [String, Number] | 10
| offset | column左侧偏移量 | [String, Number] | 0
