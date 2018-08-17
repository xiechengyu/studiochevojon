/**
 * 获取滚动的头部距离和左边距离
 * scroll().top scroll().left
 */
function scroll() {
    if(window.pageYOffset !== null){
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    }else if(document.compatMode === "CSS1Compat"){ // W3C
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }

    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }
}

/**
 * 获取屏幕的宽度和高度
 * @returns {*}
 */
function client() {
    if(window.innerWidth){ // ie9+ 最新的浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){ // W3C
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }

    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}
// 变速动画
function buffer(obj,attr,end) {
    // 1清除定时器
    clearInterval(obj.timer);
    // 2设置定时器
    obj.timer = setInterval(function () {
        // 3获取初始值
        var begin = parseInt(getCssAttr(obj,attr));
        console.log(begin);
        // 4求步长
        var speed = (end - begin) * 0.2;
        // 判断取整
        speed = end > begin ? Math.ceil(speed) : Math.floor(speed);
        obj.style[attr] = begin + speed + 'px';
        if(begin == end){
            clearInterval(obj.timer);
        }
    },50)
}
// 获取css样式
function getCssAttr(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}
// 变速动画多值
function  bufferJson(obj,json) {
    // 1清除定时器
    clearInterval(obj.timer);
    // 2设置定时器
    // 3初始化
    var begin = 0,end = 0,speed = 0;
    obj.timer = setInterval(function () {
        var onoff = true;
        // 3 遍历json
        for (var k in json){
            // 4获取初始值:或0，没有取到值的兼容性
            begin = parseInt(getCssAttr(obj,k)) || 0;
            // console.log(begin);
            end = parseInt(json[k]);
            // 5求步长
            speed = (end - begin) * 0.2;
            // 判断取整
            speed = end > begin?Math.ceil(speed):Math.floor(speed);
            obj.style[k] = begin + speed + 'px';
            if(begin != end){
                onoff = false;
            }
        }
        if(onoff){
            clearInterval(timer);
        }

    },50)
}
// 加回调函数
function buffer2(obj, json, fn) {
    // 1.1 清除定时器
    clearInterval(obj.timer);

    // 1.2 设置定时器
    var begin = 0, end = 0, speed = 0;
    obj.timer = setInterval(function () {
        // 1.3.0 旗帜
        var onoff = true;
        for(var k in json){
            // 1.3 获取初始值
            if("opacity" === k){ // 透明度
                begin =  Math.round(parseFloat(getCssAttr(obj, k)) * 100) || 100;
                end = parseInt(json[k] * 100);
            }else if("scrollTop" == k){
            	begin = Math.ceil(obj.scrollTop);
                end = parseInt(json[k]);
            }else { // 其他情况
                begin = parseInt(getCssAttr(obj, k)) || 0;
                end = parseInt(json[k]);
            }

            // 1.4 求出步长
            speed = (end - begin) * 0.2;

            // 1.5 判断是否向上取整
            speed = (end > begin) ? Math.ceil(speed) : Math.floor(speed);

            // 1.6 动起来
            if("opacity" === k){ // 透明度
                // w3c的浏览器
                obj.style.opacity = (begin + speed) / 100;
                // ie 浏览器
                obj.style.filter = 'alpha(opacity:' + (begin + speed) +')';
            }else if("scrollTop" == k){
                obj.scrollTop = begin + speed;
            }
            else if("zIndex" == k){
                obj.style[k] =json[k];
            }else {
                obj.style[k] = begin + speed + "px";
            }

            // 1.5 判断
            if(begin !== end){
                onoff = false;
            }
        }

        // 1.3 清除定时器
        if(onoff){
            clearInterval(obj.timer);

            // 判断有没有回调函数
            if(fn){
                fn();
            }
        }
    }, 20);
}