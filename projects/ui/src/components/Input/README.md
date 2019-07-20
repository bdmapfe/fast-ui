# 文本输入框
> 对表单中的文本输入框进行封装，主要用于表单填写场景。

## 基本用法

通过传入input元素的常用属性和监听input的`input`、`focus`、`blur`等事件，对input的输入能力进行封装。

```html
    <div class="test-box">
        <fast-input label="车牌号码：" placeholder="请输入车牌号"></fast-input>
    </div>
```

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| label | 输入框的label | String | ''
| value | 输入框的内容 | String | ''
| type | 输入框的类型 | String | test
| placeholder | 输入框的提醒词 | String | 请输入相应内容
| disabled | 输入框是否不可用 | Boolean | false
| readonly | 输入框是否只可读 | Boolean | false
| maxlength | 输入框内容最大长度 | Number | 100
| hasBorder | 输入框是否有边框 | Boolean | true
| border | 输入框边框样式 | String | 1px solid #ededed
| hasOutline | 输入框是否有outline | Boolean | false
| outline | 输入框outline样式 | String | 1px solid #3385ff
| hasBgColor | 输入框是否有背景色 | Boolean | false
| bgColor | 输入框背景色样式 | String | #f9f8f7
| hasPadding | 输入框是否有padding | Boolean | true
| padding | 输入框padding样式 | String | 10px 15px
| clearBtnExist | 输入框是否有清除按钮 | Boolean | true
| clearBtnShow | 清除按钮是否显示 | Boolean | false

## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| input | input框内容有变化时触发 | value 
| focus | input框获取焦点时触发 | value 
| blur | input框失去焦点时触发 | value 
| clear | 点击清除按钮时触发 | '' 
