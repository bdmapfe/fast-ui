<template>
    <div class="app-container">
        <scroller :speed="20" direction="horizontal" class="app-horizontal">
            <ul>
                <li>111111</li>
                <li>222222</li>
                <li>333333</li>
                <li>444444</li>
                <li>555555</li>
                <li>666666</li>
                <li>777777</li>
                <li>666666</li>
                <li>555555</li>
                <li>000000</li>
            </ul>
        </scroller>
        <scroller :speed="20" direction="vertical" class="app-vertical">
            <ul>
                <li>111111</li>
                <li>222222</li>
                <li>333333</li>
                <li>444444</li>
                <li>555555</li>
                <li>666666</li>
                <li>777777</li>
                <li>666666</li>
                <li>555555</li>
                <li>000000</li>
            </ul>
        </scroller>
    </div>
</template>

<script>
    import Scroller from  './Scroller.vue';
    export default {
        name: 'Scroller.demo.vue',
        components: {
            'scroller': Scroller
        },
        data() {
            return {
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .app-horizontal {
        width: 300px;
        overflow: hidden;
        ul {
            display: flex;
        }
        li {
            flex: 1;
            padding: 0 10px;
        }
    }

    .app-vertical {
        height: 200px;
        overflow: hidden;
    }
</style>
