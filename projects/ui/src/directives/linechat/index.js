/**
 * @file
 * @desc 动态修改svg图标颜色指令模块
 */

import Vue from 'vue';
const lineChat = (el, binding, vnode)=> {
    // 获取绑定信息
    let conf = binding.value;
    console.log(conf)
    // 根据canvas的设计尺寸设置画布尺寸
    let className = '.' + el.className;
    let canvas = document.querySelector(className + ' canvas');
    let width = canvas.width = conf.canvasStyle.width;
    let height = canvas.height = conf.canvasStyle.height;
    let halfWidth = width / 2;
    let halfHeight = height / 2;

    let context = canvas.getContext('2d');

    let pathLine = conf.scoreLines;

    // // Vector，一般用来表示向量，但有的时候也用来当作点来进行一计算
    // let Vector = function(x, y) {
    //         this.x = x;
    //         this.y = y;
    // }
    // Vector.prototype = {
    //     // 求向量长度
    //     "length": function () {
    //         return Math.sqrt(this.x * this.x + this.y * this.y);
    //     },
    //     // 转单位向量
    //     "normalize": function () {
    //         let inv = 1 / this.length();
    //         return new Vector(this.x * inv, this.y * inv);
    //     },
    //     // 向量叠加
    //     "add": function (v) {
    //         return new Vector(this.x + v.x, this.y + v.y);
    //     },
    //     // 向量翻倍
    //     "multiply": function (f) {
    //         return new Vector(this.x * f, this.y * f);
    //     },
    //     // 向量内积
    //     "dot": function (v) {
    //         return this.x * v.x + this.y * v.y;
    //     },
    //     // 求两个向量的夹角
    //     "angle": function (v) {
    //         return Math.acos(this.dot(v) / (this.length() *v.length())) * 180 / Math.PI;
    //     }
    // }

    // 开始绘制
    function draw() {
        // // 获取贝塞尔函数控制点
        // // let points = getControlPoint(path);
        // // 绘制贝塞尔曲线 第一个参数为需要平滑化的点的数组，第二个参数为贝塞尔函数的控制点数组
        // // let options = {
        // //     strokeStyle: "rgb(250,0,0)",
        // //     fillStyle: "rgb(250,0,0)",
        // //     lineWidth: 3
        // // }
        // // drawBezier(path, points, options);
        // // 绘制标识线
        // if (conf.markLines.needLine) {
        //     let lines = conf.markLines.lineInfo;
        //     for (let i = 0;i < lines.length; i++) {
        //         // 坐标转化，将基于canvas左下角的坐标转化为左上角的坐标
        //         let lineItem = transformCoordinate()
        //         drawText({
        //             text: lineItem.text,
        //             point: [lineItem.x - lineItem.offsetX, lineItem.y - lineItem.offsetY]
        //         });
        //         drawLines({
        //             strokeStyle: conf.markLines.markLineStyle.color,
        //             start:[lines[i].x, lines[i].y - 4],
        //             end:[width - 30, lines[i].y - 4]
        //         });
        //     }
        // }

        // 绘制折线图
        drawLineChat({
            strokeStyle: pathLine.lineStyle.strokeStyle,
            path: pathLine.lineInfo,
            fillStyle: pathLine.lineStyle.fillStyle,
            width: pathLine.lineStyle.width,
            gradientBGColor: pathLine.lineStyle.gradientBGColor
        });

        // 绘制标注信息
        for (let i = 0; i < pathLine.lineInfo.length; i++) {
            console.log('1');
            if (typeof(pathLine.lineInfo[i].text) != 'undefined') {
                // 绘制分数浮层
                drawTip({
                    location: [pathLine.lineInfo[i].x, transformCoordinate(pathLine.lineInfo[i].y)],
                    text: pathLine.lineInfo[i].text,
                    offsetY: pathLine.lineInfo[i].textOffset[1],
                    offsetX: pathLine.lineInfo[i].textOffset[0],
                    angleX: 10,
                    // 默认使用折线颜色
                    textColor: pathLine.lineInfo[i].text.textColor || pathLine.lineStyle.strokeStyle,
                    textBgColor: pathLine.lineInfo[i].text.textColor || pathLine.lineStyle.strokeStyle
                });
            }
        }
    }
    draw();

    // 监听窗口resize，然后重绘
    window.onresize = function () {
        draw();
    }

    // 求出所有贝塞尔曲线控制点
    // function getControlPoint(path) {
    //     let rt = 0.4;
    //     let i = 0, count = path.length - 2; ,
    //     let arr = [];
    //     for (; i < count; i++) {
    //         let a = path[i], b = path[i + 1], c = path[i + 2];
    //         let v1 = new Vector(a.x - b.x, a.y - b.y);
    //         let v2 = new Vector(c.x - b.x, c.y - b.y);
    //         let v1Len = v1.length(), v2Len = v2.length();
    //         let centerV = v1.normalize().add(v2.normalize()).normalize();
    //         let ncp1 = new Vector(centerV.y, centerV.x * -1);
    //         let ncp2 = new Vector(centerV.y * -1, centerV.x);
    //         if (ncp1.angle(v1) < 90) {
    //             let p1 = ncp1.multiply(v1Len * rt).add(b);
    //             let p2 = ncp2.multiply(v2Len * rt).add(b);
    //             arr.push(p1, p2)
    //         } else {
    //             let p1 = ncp1.multiply(v2Len * rt).add(b);
    //             let p2 = ncp2.multiply(v1Len * rt).add(b);
    //             arr.push(p2, p1)
    //         }
    //     }
    //     return arr;
    // }

    // 绘制折线图
    function drawLineChat(options) {

        let startPoint = options.path[0];
        console.log(startPoint)

        context.beginPath();
        context.moveTo(startPoint.x, transformCoordinate(startPoint.y));
        context.strokeStyle = options.strokeStyle || '#000';
        context.lineWidth = options.width || 1;

        // 设置渐变填充
        let linear = context.createLinearGradient(options.path[0].x, 0, options.path[0].x, parseInt(height));
        if (options.gradientBGColor && options.gradientBGColor.length > 2) {
            for (let i = 0; i < options.gradientBGColor.length; i++) {
                let colorItem = options.gradientBGColor[i];
                linear.addColorStop(colorItem.percent, colorItem.color);
            }
            context.fillStyle = linear; //把渐变赋给填充样式
        } else {
            // 默认用白色填充
            context.fillStyle = options.BGColor || '#fff';
        }

        for (let i =1; i < options.path.length; i++) {
            // 坐标转化
            let pathItem = options.path[i];
            context.lineTo(pathItem.x, transformCoordinate(pathItem.y));
        }
        context.stroke();
        context.strokeStyle = "rgba(255,255,255,0)"
        context.lineTo(options.path[options.path.length -1].x, parseInt(height));
        context.lineTo(options.path[0].x, parseInt(height));
        context.stroke();
        context.fill();
        context.closePath();
    }

    // 绘制折线阴影
    // function drawShadow(options) {

    //     for (let i =1; i < options.path.length; i++) {

    //         let min = Math.min(options.path[i].y, options.path[i - 1].y);
    //         let linear = context.createLinearGradient(options.path[i].x, min, options.path[i].x, lines[0].y);
    //         linear.addColorStop(0,'#f7eada');
    //         linear.addColorStop(0.4,'#fff');
    //         linear.addColorStop(1,'#fff');
    //         context.fillStyle = linear; //把渐变赋给填充样式
    //         context.fillRect(options.path[i - 1].x, min, options.path[i].x - options.path[i - 1].x, lines[0].y - min);
    //     }
    // }

    // 绘制贝塞尔曲线
    // function drawBezier(path, points, options) {

    //     // 设置线段样式
    //     context.strokeStyle = options.strokeStyle;
    //     context.fillStyle = options.fillStyle;
    //     context.linewidth = options.linewidth || 1;
    //     // 根据线段位置分配控制点
    //     for (let i = 0; i < path.length - 1; i++) {

    //         if (i == 0) {
    //             // 第一段线段只分配一个控制点，另一个控制点取线段起点
    //             let startPoint = path[0];
    //             let endPoint = path[1]
    //             let controlPoint = points[0];

    //             context.moveTo(startPoint.x, startPoint.y);
    //             context.bezierCurveTo(startPoint.x, startPoint.y, controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
    //             context.stroke();
    //         } else if (i == path.length - 2) {
    //             // 最后一段线段只分配一个控制点，另一个控制点取线段起点
    //             let startPoint = path[path.length - 2];
    //             let endPoint = path[path.length - 1]
    //             let controlPoint = points[path.length - 1];
    //             // console.log(points);
    //             context.lineTo(endPoint.x, endPoint.y);
    //             //context.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
    //             //context.bezierCurveTo(startPoint.x, startPoint.y, controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
    //             //ontext.bezierCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y, endPoint.x, endPoint.y);
    //             context.stroke();
    //             context.closePath();
    //         } else {
    //             // 其他线段有两个控制点
    //             let endPoint = path[i + 1]
    //             let controlPoint1 = points[2 * i - 1];
    //             let controlPoint2 = points[2 * i];

    //             context.bezierCurveTo(controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y);
    //             context.stroke();
    //         }
    //     }
    // }

    // 画提示框函数
    function drawTip(options) {
        context.beginPath();
        context.strokeStyle = options.strokeStyle || "rgba(249,241,232,0.6)";
        context.fillStyle = options.fillStyle || "rgba(249,241,232,0.6)";
        context.lineWidth = options.width || 1;

        // 画小三角形
        // console.log(options.location);
        context.beginPath();
        context.moveTo(options.location[0] - options.offsetX + options.angleX, options.location[1] - options.offsetY + 40);
        context.lineTo(options.location[0] - options.offsetX + 5 + options.angleX, options.location[1] - options.offsetY + 45);
        context.lineTo(options.location[0] - options.offsetX + 10 + options.angleX, options.location[1] - options.offsetY + 40);
        context.fill();
        context.closePath();
        // 画长方形
        context.fillRect(options.location[0] - options.offsetX, options.location[1] - options.offsetY,76,40)
        context.stroke();
        // 画文字
        drawText({
            text: options.text,
            point: [options.location[0] - options.offsetX + 40, options.location[1] - options.offsetY + 24],
            fillStyle:  options.textColor
        });
    }

    // 画圆函数
    function drawArc(options) {
        context.beginPath();
        context.strokeStyle = options.strokeStyle;
        context.fillStyle = options.fillStyle;
        context.lineWidth = options.width || 1;
        context.arc(options.location[0], options.location[1], options.radius, 0, options.angleLimits[1]);
        context.stroke();
        options.needFill && context.fill();
        context.closePath();
    }

    // 画线段
    function drawLines(options) {
        context.beginPath();
        context.strokeStyle = options.strokeStyle;
        context.lineWidth = options.width || 1;
        context.moveTo(options.start[0], options.start[1]);
        context.lineTo(options.end[0], options.end[1]);
        context.stroke();
        context.closePath();
    }

    // 画文字
    function drawText (options) {
        let point = options.point;
        let text = options.text;
        // 默认指定位置为文字的X轴中心，Y轴的baseline
        context.textAlign = options.textAlign || 'center';
        context.font = options.font || '24px PingFangSC-Regular';
        context.fillStyle = options.fillStyle || '#999';
        let mesure = context.measureText(text);
        // 将文字Y轴中心移动指定位置（默认指定位置以baseline做基准）
        let offsetY;
        // mesure.hangingBaseline有兼容性问题
        let ua = navigator.userAgent.toLowerCase();
        if (mesure.hangingBaseline && ua.indexOf('android') > -1) {
            offsetY = mesure.hangingBaseline - mesure.actualBoundingBoxDescent / 2 ;
        }
        else {
            offsetY = parseInt(context.font, 10) * 5 / 22;
        }
        context.fillText(text, point[0], point[1] + offsetY);
    }

    // 标转化，将基准点换到canvas左下角
    function transformCoordinate (y) {
        let newY = height - y;
        return newY;
    }
};
const index = {
    update: lineChat
};
Vue.directive('lineChat', index);
export default index
