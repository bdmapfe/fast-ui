# Radio
> 单选按钮

## 基本用法

通过isShow控制显隐，通过data传入数据

```html
    <notice :isShow="showNotice" :data="noticeData" @notice-click="clickNotice" @close-notice="closeNotice"></notice>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| isShow | 是否显示通知条| Boolean | false


## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| notice-click | 点击通知条内容事件 | -- 

