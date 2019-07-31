<template>
    <div class="fast-skeleton-circle"
         :style="{
             backgroundColor: bgColor,
             width: width,
             height: width,
             borderRadius: '50%',
             margin: margin
         }"
    >
    </div>
</template>

<script>
    export default{
        name:'skeletonCircle',

        props:{
            // 背景色
            bgColor:{
                type: String,
                default: '#efefef'
            },
            // 宽值
            width:{
                type: String,
                default: '1.5rem'
            },
            // margin值
            margin:{
                type: String,
                default: '0 0 0 0'
            }
        }
    }
</script>

<style>
    .fast-skeleton-circle {
        flex: none;
    }
</style>


