//获取页面高度
function client(){
    if(window.innerWidth){
        return{
            width : window.innerWidth,
            height : window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }
}

//获取滚动的头部距离和左边距离
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


// 变速动画,只能传一个参数，改变一个效果
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

//json 传多个参数
function buffer2(obj, json, fn) {
    // 1 清除定时器
    clearInterval(obj.timer);
    // 2 设置定时器
    var begin = 0, end = 0, speed = 0;
    obj.timer = setInterval(function () {
        // 3 开关
        var onoff = true;
        for(var k in json){
            // 4获取初始值
            if("opacity" === k){ // 透明度
                begin =  Math.round(parseFloat(getCssAttr(obj, k)) * 100) || 100;
                end = parseInt(Math.ceil(json[k]) * 100);
            }else if("scrollTop" == k){
                //因为scrollTop不在css样式内，在obj.scrolltop内，所以需要额外处理。
                begin = Math.ceil(obj.scrollTop);
                end = parseInt(Math.ceil(json[k]));
            }else { // 其他情况
                begin = parseInt(getCssAttr(obj, k)) || 0;
                end = parseInt(json[k]);
            }
            // 5求出步长
            speed = (end - begin) * 0.2;
            // 6 判断是否向上取整
            speed = (end > begin) ? Math.ceil(speed) : Math.floor(speed);
            // 7动起来
            if("opacity" === k){ // 透明度
                // w3c的浏览器
                obj.style.opacity = (begin + speed) / 100;
                // ie 浏览器
                obj.style.filter = 'alpha(opacity:' + (begin + speed) +')';
            }else if("scrollTop" == k){
                //因为scrollTop不在css样式内，在obj.scrolltop内，所以需要额外处理。
                obj.scrollTop = begin + speed;
            }else {
                obj.style[k] = begin + speed + "px";
            }
            // 8 判断
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
