# Notice
> 通知小黄条，支持展示、跳转和关闭

## 基本用法

通过isShow控制显隐，通过data传入数据

```html
    <notice :isShow="showNotice" :data="noticeData" @notice-click="clickNotice" @close-notice="closeNotice"></notice>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| isShow | 是否显示通知条| Boolean | false
| data | 设置通知条内容 | Object | --
| data.url | 跳转链接，存在则跳转 | String | --
| data.type | 通知类型 | String | --
| data.title | 通知标题 | String | --

## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| notice-click | 点击通知条内容事件 | -- 
| close-notice | 点击关闭通知条头像触发事件 | -- 
