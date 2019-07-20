<template>
    <!-- class markdown-body 必须加，否则标签样式会出现问题 -->
    <div class="markdown-body">
        <markdown />
    </div>
</template>

<script>
    // 引入 markdown 文件，引入后是一个组件，需要在 components 中注册
    import markdown from '@/assets/ApiDocument.md'
    // 代码高亮
    import 'highlight.js/styles/github.css'
    // 其他元素使用 github 的样式
    import 'github-markdown-css'
    export default {
        components: {
            markdown
        },
    }
</script>

<style scoped>
    .markdown-body {
        font-size: 20px;
    }
</style>
