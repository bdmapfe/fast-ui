<template>
    <div class="app-container">
        <notice :isShow="showNotice" :data="noticeData" @notice-click="clickNotice" @close-notice="closeNotice"></notice>
    </div>
</template>

<script>
    import Notice from  './Notice.vue';
    export default {
        name: "Notice.demo.vue",
        components: {
            'notice': Notice
        },
        data() {
            return {
                showNotice: true,
                noticeData: {
                    id: 1,
                    type: '加分',
                    title: '购险成功！五月已提升25车主分！'
                }
            }
        },
        methods: {
            closeNotice() {
                this.showNotice = false;
            },
            clickNotice() {

            }
        }
    }
</script>

<style scoped>

</style>
