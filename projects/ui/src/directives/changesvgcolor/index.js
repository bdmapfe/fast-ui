/**
 * @file
 * @desc 动态修改svg图标颜色指令模块
 */

import Vue from 'vue';
const changeColor = (el, binding, vnode)=> {
    // 获取绑定信息，获得最终输出的颜色
    let conf = binding.value;
    let originColor = conf.originColor || '#333333';
    let targetColor = conf.targetColor;
    // 读取svg文件，并修改svg的颜色
    let image = el.querySelector('img');
    // url从vnode中读取，vnode肯定是及时更新的
    // let imgUrl = image.src;
    let imgUrl = vnode.children[0].data.attrs.src;
    let className = image.className;
    // 判断是否svg的内容是否已经是最新的（判断标准是url+color），不是最新则进行修改
    let svg = el.querySelector('svg');
    /*if (svg) {
        console.log(el, image, image.src, svg.getAttribute('currentSrc'), imgUrl, vnode.children[0].data.attrs.src);
    }*/
    if (!imgUrl) {
        return;
    }
    // svg元素存在，url相同，直接替换svg内容
    if (svg && svg.getAttribute('currentSrc') === imgUrl) {
        // console.log("the same url");
        className = svg.getAttribute('class');
        if (svg.getAttribute('currentColor') !== targetColor) {
            svg.outerHTML = getSvgContent(svg.outerHTML);
            // console.log("the same url; but the color diff");
        }
    }
    // svg元素存在，url不同，先下载新的svg图片，然后替换svg内容
    else if (svg && svg.getAttribute('currentSrc') !== imgUrl) {
        ajaxGet(imgUrl, function (data) {
            let parser = new DOMParser();
            let svgDom = parser.parseFromString(getSvgContent(data), "text/xml");
            // 解决组件样式中加scoped属性导致的问题
            try {
                let vueDataAttribute = el.attributes[0].name;
                if (/data\-v\-/.test(vueDataAttribute)) {
                    svgDom.firstChild.setAttribute(vueDataAttribute, '');
                }
            } catch (err) {
                console.log('获取vue 组件id失败');
            }
            svg.outerHTML = svgDom.firstChild.outerHTML;
        });
    }
    // svg元素不存在，先下载新的svg图片，创建svg元素并添加
    else {
        // 利用isRequesting请求避免重复请求
        if (!el.getAttribute('isRequesting')) {
            ajaxGet(imgUrl, function (data) {
                el.setAttribute('isRequesting', false);
                if (!el.querySelector('svg')) {
                    // 添加一个svg元素
                    let parser = new DOMParser();
                    let svgDom = parser.parseFromString(getSvgContent(data), "text/xml");
                    // 解决组件样式中加scoped属性导致的问题
                    try {
                        let vueDataAttribute = el.attributes[0].name;
                        if (/data\-v\-/.test(vueDataAttribute)) {
                            svgDom.firstChild.setAttribute(vueDataAttribute, '');
                        }
                    } catch (err) {
                        console.log('获取vue 组件id失败');
                    }
                    el.appendChild(svgDom.firstChild);
                }
            });
            el.setAttribute('isRequesting', true);
        }
    }
    // 拼装svg图片的内容
    function getSvgContent(data) {
        // 替换颜色
        let colorReg = new RegExp(originColor, 'g');
        let svgStr = data.replace(colorReg, targetColor);
        // 将img的url和最新颜色写入到svg，打上标记，避免重复请求
        let tag = 'currentSrc="' + imgUrl + '" ' + 'currentColor="' + targetColor + '" ' + 'class="' + className + '" ';
        svgStr = svgStr.replace(/<svg/, '<svg ' + tag);
        return svgStr;
    }
    // ajax get请求封装
    function ajaxGet(url, callback) {
        let XHR = null;
        if (window.XMLHttpRequest) {
            XHR = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            XHR = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            XHR = null;
        }
        if(XHR){
            XHR.open("GET", url);
            XHR.onreadystatechange = function () {
                if (XHR.readyState == 4 && XHR.status == 200) {
                    callback(XHR.responseText);
                }
            };
            XHR.send();
        }
    }
};
const index = {
    update: changeColor,
    bind: changeColor
};
Vue.directive('changeSvgColor', index);
export default index
