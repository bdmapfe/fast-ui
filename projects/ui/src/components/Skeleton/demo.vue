<template>
    <div class="fast-skeleton">
        <!--基础使用-->
        <h2>基础使用</h2>
        <h4>圆形</h4>
        <SkeletonCircle></SkeletonCircle>

        <h4>方形形</h4>
        <SkeletonSquare width="1.5rem" height="1.5rem"></SkeletonSquare>

        <h4>圆角矩形形</h4>
        <SkeletonSquare width="1.5rem" height="1.5rem" radius="20px"></SkeletonSquare>

        <!--组合使用-->
        <h2 style="margin-top: 20px;">组合使用</h2>

        <h4>横排</h4>
        <Row align="center">
            <SkeletonCircle width="1rem"></SkeletonCircle>
            <SkeletonSquare width="7.7rem" height="1.5rem" margin="0 0 0 0.5rem"></SkeletonSquare>
        </Row>

        <h4>竖排</h4>
        <Col>
            <SkeletonSquare height=".7rem" margin=".2rem 0 0 0" :count="3"></SkeletonSquare>
        </Col>

        <h4>横竖组合使用</h4>
        <Row>
            <SkeletonCircle width="1rem"></SkeletonCircle>
            <Col margin="0 0 0 .5rem">
                <SkeletonSquare height=".3rem" margin="0 0 .2rem  0" :count="3"></SkeletonSquare>
            </Col>
        </Row>

        <h4>loading态骨架图</h4>
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
    </div>
</template>

<script>
    import SkeletonCircle from './SkeletonCircle';
    import SkeletonSquare from './SkeletonSquare';
    import SkeletonLoadingBox from './SkeletonLoading';
    import Col from '../FlexColumn/column';
    import Row from '../FlexRow/row';

    export default {
        name: 'skeletonDemo',

        components: {
            SkeletonCircle,
            SkeletonSquare,
            SkeletonLoadingBox,
            Col,
            Row
        }
    }
</script>

<style lang="scss">
    .demo-wrapper {
        background: #fff;

        .fast-skeleton {
            padding: 0 30px 40px;

            h4 {
                margin: 20px 0 10px;
                line-height: 60px;
                border-bottom: 1px solid #e6e6e6;
            }
        }
    }
</style>