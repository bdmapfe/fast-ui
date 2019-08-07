# Accordion
> 手风琴

## 用法


```html
    /**基本用法**/
    <Accordion :datas="accordionData"></Accordion>
```
```html
    /**通过slot插槽分发内容**/
   <Accordion :datas="accordionData">
       <div slot="accordion-header">
           <div class="accordion-header-icon">问</div>
       </div>

       <div slot="accordion-body">
           <div class="concat-line"></div>
           <div class="accordion-content-icon">答</div>
       </div>
   </Accordion>

```
```html
    /**禁用默认，使用Slot**/
   <Accordion :defaultLayout="false">
       <div slot="accordion-header">
           <h2 class="accordion-title">这是一个测试用例title</h2>
       </div>

       <div slot="accordion-body">
           <h2 class="accordion-content" style="color: red;">这是一个测试用例content</h2>
       </div>
   </Accordion>

```


## slot插槽
| slot名称 | 说明
|----- | ----- 
| accordion-header | accordion头部slot插槽 
| accordion-body | accordion内容区slot插槽 

## Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| datas | 数据 | Object | {title: '', content:''}
| defaultLayout | 是否使用默认主体样式 | Boolean | true

