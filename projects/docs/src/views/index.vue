<template>
    <div class="demo-list-wrapper">
        <div class="title-desc">
            <p class="title">Fast UI Library</p>
            <p class="desc">基于Vue的移动端组件库快速开发template</p>
        </div>
    </div>
</template>

<script>
    import { version } from '../../../../package.json';
    import uiPackage from '@ui/config/package.js';

    export default {
        name: "index",
        data() {
            return {
                categories: [],
                version,
                foldStatus: []
            };
        },
        created() {
            this.categories = uiPackage.categories;
            this.categories.forEach(()=>{
                this.foldStatus.push(0);
            });
        },
        activated() {
            const seVal = sessionStorage.getItem("foldStatus");
            seVal && (this.foldStatus = JSON.parse(seVal));
        },
        methods: {
            toggleFold(index) {
                const newValue = this.foldStatus[index] ? 0 : 1;
                this.foldStatus.splice(index, 1, newValue);
                sessionStorage.setItem("foldStatus", JSON.stringify(this.foldStatus));
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "@/libs/css/mixin.scss";
    .demo-list-wrapper {
        position: relative;
        font-size: 28px;
        padding-top: 200px;
    }
    .github-btn {
        position: absolute;
        top: -20px;
        right: 10px;
        @include flex(column);
        @include box-center();
        opacity: .5;
    }
    .github-icon {
        display: inline-block;
        width: 48px;
        height: 48px;
        background: url(../assets/images/github.svg) no-repeat;
        background-size: 48px 48px;
    }
    .logo-container {
        height: 154px;
        text-align: center;
        padding: 60px 0 30px;
    }
    .title-desc {
        text-align: center;
        .title {
            font-size: 38px;
            line-height: 58px;
        }
        .desc {
            opacity: .6;
        }
    }
    .demo-list-box {
        margin: 30px auto;
        width: 95%;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        .category {
            position: relative;
            @include flex();
            @include box-center();
            margin: 0;
            height: 100px;
            font-weight: normal;
            line-height: 100px;
            padding: 0 30px;
            .title {
                flex: 1;
            }
            .arrow {
                @include arrow(bottom, 10px, 1Px, #888);
            }
        }
        ul {
            padding: 0 10px;
            li {
                border-top: 1Px solid #edeef1;
                border-radius: 2px;
                a {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    padding: 40px 20px 40px 20px;
                    text-decoration: none;
                    color: #2e2d2d;
                    span {
                        margin-left: 30px;
                        opacity: .6;
                        font-size: 26px;
                    }
                    .desc {
                        flex: 1;
                    }
                    .arrow {
                        @include arrow(right, 10px, 1Px, #888);
                    }
                }
            }
        }
        &.unfold {
            .category {
                .arrow {
                    @include arrow(top, 10px, 1Px, #888);
                }
            }
        }
    }

    .version {
        opacity: .3;
        font-size: 26px;
        text-align: center;
    }

</style>
