# Cell
> 列表项

## 用法


```html
    /**基本用法**/
    <div class="linechat-container" v-line-chat="linechatConf">
        <canvas class="linechat"></canvas>
    </div>
```

## linechatConf

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| canvasStyle.width | cavans宽度 | Number | --
| canvasStyle.height | cavans高度 | Number | --
| lineInfo.linePointInfo | 折线图点坐标信息 | Array | --
| lineInfo.lineStyle.width | 折线图宽度 | Number | --
| lineInfo.lineStyle.strokeStyle | 折线颜色 | String | --
| lineInfo.lineStyle.fillStyle| 折线边框颜色 | String | --
| lineInfo.lineStyle.gradientBGColor | 背景渐变色数组:percent和color对应着canvas中addColorStop的两个参数 | Array | false
| tipsInfo.tipsPointInfo | 提示点坐标信息 | Array | --
| tipsInfo.tipsStyle.textBgColor | 提示框背景颜色 | String | --
| tipsInfo.tipsStyle.textColor | 提示框文字颜色 | String | --
