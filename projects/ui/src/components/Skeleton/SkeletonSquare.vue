<template>
    <div class="fast-skeleton-square-wrap">
        <div class="fast-skeleton-square"
             v-for=" i in count"
             :key="i"
             :style="{
                backgroundColor: bgColor,
                width: width,
                height: height,
                margin: margin,
                borderRadius: radius
            }"
        >
        </div>
    </div>
</template>

<script>
    export default{
        name:'skeletonSquare',

        props:{
            // 背景色
            bgColor:{
                type: String,
                default: '#efefef'
            },
            // 宽度值
            width:{
                type: String,
                default: '100%'
            },
            // 高度值
            height:{
                type: String,
                default: '1.5rem',
            },
            // margin值
            margin:{
                type: String,
                default: '0 0 0 0'
            },
            radius: {
                type: String,
                default: '0'
            },
            // 初始化多个
            count:{
                type:Number,
                default:1
            }
        }
    }
</script>

<style lang="scss">
    .fast-skeleton-square-wrap {
        /*.fast-skeleton-square:last-child {*/
            /*margin-bottom: 0!important;*/
        /*}*/
    }
</style>