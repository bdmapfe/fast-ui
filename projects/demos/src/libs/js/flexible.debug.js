/* eslint-disable */
(function(win, lib) {
    var scaleRatio = (function() {
        var realFontSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
        return 16 / realFontSize;
    })();

    var timer,
        doc = win.document,
        docElem = doc.documentElement,

        vpMeta = doc.querySelector('meta[name="viewport"]'),
        flexMeta = doc.querySelector('meta[name="flexible"]'),

        dpr = 0,
        scale = 0,

        flexible = lib.flexible || (lib.flexible = {});

    // 设置了 viewport meta
    if (vpMeta) {

        var initial = vpMeta.getAttribute("content").match(/initial\-scale=([\d\.]+)/);

        if (initial) {
            scale = parseFloat(initial[1]); // 已设置的 initialScale
            dpr = parseInt(1 / scale); // 设备像素比 devicePixelRatio
        }
    }
    function setFontSize() {
        var winWidth = docElem.getBoundingClientRect().width;

        if (winWidth / dpr > 540) {
            (winWidth = 540 * dpr);
        }

        // 根节点 fontSize 根据宽度决定
        var baseSize = winWidth / 10 * scaleRatio;
        // console.log(baseSize);

        docElem.style.fontSize = baseSize + "px";
    }

    // 调整窗口时重置
    win.addEventListener("resize", function() {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);

    // orientationchange
    win.addEventListener("orientationchange", function() {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 300);
    }, false);

    // pageshow
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(setFontSize, 300);
        }
    }, false);

    // 设置基准字体
    if ("complete" === doc.readyState) {
        doc.body.style.fontSize = 16 * dpr + "px";
    } else {
        doc.addEventListener("DOMContentLoaded", function() {
            doc.body.style.fontSize = 16 * dpr + "px";
        }, false);
    }

    setFontSize();
})(window, window.lib || (window.lib = {}));

export default window.lib
