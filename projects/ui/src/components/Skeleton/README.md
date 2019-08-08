# Skeleton
> 骨架图。在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

## 基本用法

### 圆形
```html
   <skeleton-circle
        bgColor="#efefef"
        width="1.5rem"
        margin="0 .5rem 0"
   ></skeleton-circle>

```
#### Props
| props | 类型 | 默认值 | 说明
|----- | ----- | ----- | ----- 
| bgColor | String | #efefef | 背景色 
| width | String | 100%  | 圆直径 
| margin | String | 0,0,0,0  | 圆margin值 

### 矩形/圆角矩形
```html
   <skeleton-square
        bgColor="#efefef"
        width="1.5rem"
        height="1.5rem"
        radius="20px"
        margin="0 .5rem 0"
        count="3"
   ></skeleton-square>

```
#### Props
| props | 类型 | 默认值 | 说明
|----- | ----- | ----- | ----- 
| bgColor | String | #efefef | 背景色 
| width | String | 100%  | 宽度值 
| height | String | 1.5rem  | 高度值 
| radius | String | 0  | 高度值 
| margin | String | 0,0,0,0  | 矩形margin值 
| count | Number | 0  | 初始化N个矩形 

### 骨架图loading态盒子
```html
   <skeleton-loading-box></skeleton-loading-box>

```
### 组合使用

```html
   <Row>
       <skeleton-circle width="1rem"></skeleton-circle>
       <Col margin="0 0 0 .5rem">
           <skeleton-square height=".3rem" margin="0 0 .2rem  0" :count="3"></skeleton-square>
       </Col>
    </Row>
```

### 结合loading态使用
```html
    <SkeletonLoadingBox>
        <Row>
            <SkeletonSquare width="1.8rem" height="1.8rem"></SkeletonSquare>
            <Col margin="0 0 0 .5rem">
            <SkeletonSquare height=".4rem" margin="0 0 .2rem 0"></SkeletonSquare>
            <SkeletonSquare width="45%" height=".25rem" margin="0 0 .2rem 0"></SkeletonSquare>
            <SkeletonSquare width="25%" height=".28rem" margin=".67rem 0 .2rem 0"></SkeletonSquare>
            </Col>
        </Row>
    </SkeletonLoadingBox>
```

