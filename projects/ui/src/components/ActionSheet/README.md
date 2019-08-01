# ActionSheet
> 动作面板，由一个黑色透明蒙层 + 底部白色操作面板构成。支持面板自定义和自带选择菜单。

## 基本用法

### 无头部bar自定义面板
```html
<fast-action-sheet 
    :is-visible="customSheetVisible"
    @close="switchVisible('customSheetVisible')">
    <div slot="custom" class="custom-sheet">
        <span>用户自定义内容</span>
    </div>
</fast-action-sheet>
```
### 头部bar自带Menu面板
```html
<fast-action-sheet
    :is-visible="headBarSheetVisible"
    title="请选择合适的项目"
    support-head-bar="true"
    :menu-items="menuItems"
    :choosed-item="choosedItem"
    @close="switchVisible('headBarSheetVisible')"
    @confirm-choose-item="confirmChooseItem">
</fast-action-sheet>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| supportAnimation | 是否支持mask和panel的动效| Boolean | true
| isVisible | 是否显示操作面板 | Boolean | false
| supportHeadBar | 是否支持头部bar | Boolean | true
| showHeadBarSure | 是否显示确认按钮 | Boolean | true
| title | 头部title文案 | String | ''
| menuItems | 面板中的选项 | Object Array | [{}]
| optionTag | 面板中的选项的展示字段名 | String | 'name'
| choosedItem | 面板中的选项当前选择项 | Object | {}

## 特殊说明

组件如果有 slot="custom" 的子元素，表示接受面板自定义。

## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| close | 关闭面板 | 
| cancel-choose-item | 取消选择项 |  
| confirm-choose-item | 确认选择项 | chooseItem
| choose-item | 切换选择项 | chooseItem  
