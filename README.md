## 快速构建基于Vue的UI库
> 主要是提供一个组件库的原型，支持demo、文档、单元测试和编译产出等能力，帮助前端开发者快速构建基于Vue的组件库。

## demo示例
```
    npm install
    npm run serve demos
```
截图：  
![image](https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/map/pic/item/a686c9177f3e67090cd79a1435c79f3df9dc5502.jpg)
## docs示例
```
    npm run serve docs
```
截图：  
![image](https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/map/pic/item/aa64034f78f0f73651e292ea0455b319ebc41339.jpg)

## 生成库文件
```
    npm run build ui
```
截图：  
![image](https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/map/pic/item/f9198618367adab4bf5e25af85d4b31c8601e454.jpg)

## 新增UI
1. 在`ui/src`目录下，根据UI的类别（component/directive/plugin）在对应的文件夹下，创建相应的ui文件夹；
![image](https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/map/pic/item/738b4710b912c8fc13102826f2039245d788217e.jpg)
2. 完成ui，并完善demo、文档；
3. 在`ui/config/package.js`文件中指定新增UI的类型和展示配置。

