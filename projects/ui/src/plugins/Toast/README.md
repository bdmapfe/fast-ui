# Toast
> 页面Toast

## 基本用法
在组件内部直接使用this.$toast即可，因为toast的能力挂载在`Vue.prototype.$toast`上。
```javascript
    this.$toast('我是toast', {duration: 3000});
```

在引入vue的项目中，直接使用Vue.prototype.$toast即可
```javascript
    Vue.prototype.$toast('我是toast', {duration: 3000});
```

## 参数设置

| 字段 | 说明 | 类型 | 默认值 | 备注
| ----- | ----- | ----- | ----- | -----
| text | 显示的内容 | String | 'toast' |
| options | 显示的配置选项 | Object | -- |
| options.duration | 显示时长 | Number | 3000 | 单位为ms
