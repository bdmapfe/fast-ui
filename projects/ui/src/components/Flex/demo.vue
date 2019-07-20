<template>
    <div class="demo-wrapper">
        <h4>基础布局（横向分为10等份）</h4>
        <p class="desc">flex-basic</p>
        <div class="test-box">
            <fast-flex-row>
                <fast-flex-column span="3">
                    <div class="test-item">span:3</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item light">span:3</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">span:3</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">flex-column with offset</p>
        <div class="test-box">
            <fast-flex-row>
                <fast-flex-column span="3">
                    <div class="test-item">span:3</div>
                </fast-flex-column>
                <fast-flex-column offset="1"  span="3">
                    <div class="test-item light">offset:1 span:3</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">span:3</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">justify-content: space-between</p>
        <div class="test-box">
            <fast-flex-row justify="space-between">
                <fast-flex-column span="3">
                    <div class="test-item">span-between</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">span-between</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">span-between</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">justify-content: space-around</p>
        <div class="test-box">
            <fast-flex-row justify="space-around">
                <fast-flex-column span="3">
                    <div class="test-item">span-around</div>
                </fast-flex-column>
                <fast-flex-column span="2">
                    <div class="test-item">around</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">span-around</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">justify-content: center</p>
        <div class="test-box">
            <fast-flex-row justify="center">
                <fast-flex-column span="3">
                    <div class="test-item">center</div>
                </fast-flex-column>
                <fast-flex-column span="2">
                    <div class="test-item light">center</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">center</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">justify-content: flex-end</p>
        <div class="test-box">
            <fast-flex-row justify="end">
                <fast-flex-column span="3">
                    <div class="test-item">flex-end</div>
                </fast-flex-column>
                <fast-flex-column span="2">
                    <div class="test-item light">end</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">flex-end</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">center-center</p>
        <div class="test-box">
            <fast-flex-row class="taller" align="center" justify="center">
                <fast-flex-column span="3">
                    <div class="test-item">center</div>
                </fast-flex-column>
                <fast-flex-column span="2">
                    <div class="test-item light">center</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">center</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">align-item: flex-end</p>
        <div class="test-box">
            <fast-flex-row class="taller" align="end">
                <fast-flex-column span="3">
                    <div class="test-item">align:end</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item light">align:end</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">align:end</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">flex-row-wrap: wrap</p>
        <div class="test-box">
            <fast-flex-row wrap="wrap">
                <fast-flex-column span="3">
                    <div class="test-item">wrap</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item light">wrap</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">wrap</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item light">wrap</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>

        <p class="desc">flex-row-wrap: no-wrap</p>
        <div class="test-box">
            <fast-flex-row wrap="no-wrap">
                <fast-flex-column span="3">
                    <div class="test-item">no-wrap</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item light">no-wrap</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item">no-wrap</div>
                </fast-flex-column>
                <fast-flex-column span="3">
                    <div class="test-item light">no-wrap</div>
                </fast-flex-column>
            </fast-flex-row>
        </div>
    </div>
</template>

<script>
    import FlexRow from '../FlexRow/row.vue'
    import FlexColum from '../FlexColumn/column.vue'
    export default {
        name: "Flex",
        components: {
            'fast-flex-row': FlexRow,
            'fast-flex-column': FlexColum
        }
    }
</script>

<style lang="scss" scoped>
    .demo-wrapper {
        padding: 30px;
    }
    .desc {
        color: #999;
        padding-bottom: 16px;
        font-size: 24px;
    }
    .test-box {
        background: #fff;
        margin-bottom: 40px;
        padding: 30px;
        font-size: 24px;
    }
    .taller {
        height: 100px;
    }
    .test-item {
        height: 50px;
        line-height: 50px;
        color: #fff;
        text-align: center;
        background: #3385ff;
    }
    .light {
        opacity: .6;
    }
</style>
