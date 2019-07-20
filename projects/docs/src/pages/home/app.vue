<template>
    <div class="docs-wrapper" :class="{'close' : forceHideBar}">
        <nav class="app-nav">
            <ul>
                <li>
                    <a href="https://github.com/huangwenming/fast-ui-lib">demos</a>
                </li>
            </ul>
        </nav>
        <main>
            <button class="sidebar-toggle">
                <div class="sidebar-toggle-button" @click="toggleSidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <aside class="sidebar">
                <h1 class="app-name">
                    <a href="https://github.com/huangwenming/fast-ui-lib">fast UI</a>
                </h1>
                <div class="sidebar-nav">
                    <ul v-for="nav in sideNavs">
                        <li>
                            <p>{{nav.name}}</p>
                            <ul v-for="item in nav.list">
                                <li>
                                    <a href="javascript:void(0);" @click="changeDemoUrl(item.name)">{{item.name}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
            <section class="content">
                <div class="docs-content">
                    <keep-alive>
                        <router-view ></router-view>
                    </keep-alive>
                </div>
                <div class="demos-frame">
                    <iframe width="100%" height="100%" :src="demoUrl"></iframe>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import uiConfig from '@ui/config/package.js';
    export default {
        name: "app",
        data() {
            return {
                forceHideBar: false,
                sideNavs: uiConfig.categories,
                demoUrl: 'http://yq01-mapcarowner-rddev-fe01.epc.baidu.com:8096/demos/home.html/index'
            }
        },
        methods: {
            toggleSidebar() {
                this.forceHideBar = !this.forceHideBar;
            },
            changeDemoUrl(demoName) {
                this.$router.push({path: '/' + demoName});
                this.demoUrl = 'http://yq01-mapcarowner-rddev-fe01.epc.baidu.com:8096/demos/home.html/' + demoName;
                console.log(this.demoUrl);
            }
        }
    }
</script>

<style lang="scss">
    @import "@/libs/css/mixin.scss";
    body {
        font-size: 32px;
        margin: 0;
        color: #2e2d2d;
        font-family: PingHei, "Microsoft YaHei", "Lucida Grande",
        "Lucida Sans Unicode", STHeiti, Helvetica, Arial, Verdana, "sans-serif",
        "PingHei-light", SimHei, "Droid Sans";
    }
    .app-nav {
        margin: 25px 60px 0 0;
        position: absolute;
        right: 0;
        text-align: right;
        z-index: 2;
        ul, li {
            display: inline-block;
            list-style: none;
            margin: 0;
        }
        li {
            margin: 0 1rem;
            padding: 5px 0;
            position: relative;
        }
        a {
            color: inherit;
            font-size: 24px;
            text-decoration: none;
            transition: color .3s;
        }
    }
    .sidebar-toggle {
        position: fixed;
        background-color: transparent;
        background-color: #fff;
        border: 0;
        outline: none;
        padding: 10px;
        bottom: 0;
        left: 0;
        text-align: center;
        transition: opacity .3s;
        width: 50px;
        z-index: 4;
        span {
            background-color: #42b983;
            display: block;
            margin-bottom: 10px;
            width: 42px;
            height: 4px;
        }
    }
    .sidebar {
        border-right: 1px solid rgba(0,0,0,.07);
        overflow-y: auto;
        padding: 40px 0 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        transition: transform .25s ease-out;
        width: 300px;
        z-index: 3;
        h1 {
            margin: 0 auto 1rem;
            font-size: 40px;
            font-weight: 300;
            text-align: center;
            a {
                color: inherit;
                cursor: pointer;
                text-decoration: none;
            }
        }
        .sidebar-nav {
            line-height: 2em;
            padding-bottom: 40px;
            ul, li {
                list-style: none;
            }
            ul {
                margin: 0 0 0 15px;
            }
            li {
                margin: 6px 0;
                p {
                    font-weight: 700;
                }
                a {
                    cursor: pointer;
                    color: #505d6b;
                    font-size: 14px;
                    font-weight: 400;
                    overflow: hidden;
                    text-decoration: none;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
    .content {
        padding: 60px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 300px;
        transition: left .25s ease;
        @include flex();
        .docs-content {
            flex: 1;
            min-width: 500px;
            overflow: scroll;
        }
        .demos-frame {
            flex-shrink: 0;
            width: 600px;
            padding: 100px 40px;
            height: 1000px;
            iframe {
                border: none;
                box-shadow: 0 0 9px 5px #eee;
            }
        }
    }
    .docs-wrapper.close {
        .sidebar {
            transform: translateX(-300px);
        }
        .content {
            left: 0;
        }
    }
    @media screen and (max-width: 768px) {
        .docs-wrapper.close {
            .sidebar, .content {
                transform: translateX(300px);
            }

        }
        .app-nav {
            display: none;
            margin-top: 16px;
            transition: transform .25s ease-out;
        }
        .sidebar {
            left: -300px;
            transition: transform .25s ease-out;
        }
        .content {
            left: 0;
            max-width: 100vw;
            position: static;
            padding-top: 20px;
            transition: transform .25s ease;
            @include flex(column);
        }
    }
    .docs-wrapper {
        width: 100%;
        min-height: 100vh;
        padding-top: 40px;
        box-sizing: border-box;
        background: #fff;
    }
    div, span, p, ul, li {
        margin: 0;
        padding: 0;
    }
    * {
        box-sizing: border-box;
    }
</style>
