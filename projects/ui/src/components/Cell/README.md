# Cell
> 列表项

## 用法


```html
    /**基本用法**/
    <Cell
        cover = 'https://himg.bdimg.com/sys/portrait/item/fc89c885.jpg?time=6296'
        title = '左侧主标题'
        subTitle = '左侧副标题'
        centerText = '居中文本内容'
        desc = '右侧描述性文字'
        isLink = '是否可点击跳转'
        linkUrl = '跳转链接'
        showArrow = '是否展示右侧箭头Icon'
        controlConfig = "{img:'https://himg.bdimg.com/sys/portrait/item/fc89c885.jpg?time=6296', borderRadius: '20%'}"
    ></Cell>
```
```html
    /**通过slot插槽分发内容**/
    
    // 居中自定义slot
    <Cell title="这是标题" :showArrow="true">
        <input type="text" slot="cell-center-slot" placeholder="这是一个input输入框">
    </Cell>
    
    // 左、中、右侧自定义slot
    <Cell>
        <div slot="cell-left-slot">左侧自定义slot</div>
        <div slot="cell-center-slot">居中自定义slot</div>
        <div slot="cell-right-slot">右侧自定义slot</div>
    </Cell>

```


## slot
| slot名称 | 说明
|----- | ----- 
| cell-left-slot | 左侧自定义slot插槽 
| cell-center-slot | 居中自定义slot插槽 
| cell-right-slot | 右侧自定义slot插槽 

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| cover | 图片 | String | --
| title | 左侧主标题 | String | --
| subTitle | 左侧副标题 | String | --
| centerText | 居中文本内容 | String | --
| desc | 通知标题 | 右侧描述性文字 | --
| linkUrl | 跳转链接 | String | --
| isLink | true:呈现点击链接时的点击态,配合linkUrl字段使用 | Boolean | false
| showArrow | 是否展示右侧箭头Icon | Boolean | false
| controlConfig | 是否展示右侧可点击自定义icon | Object | --
| controlConfig.img | 可点击icon的图片链接 | String | --
| controlConfig.borderRadius | 可点击icon的圆角大小 | String | 50%

