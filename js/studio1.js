    var content = document.getElementsByClassName('content')[0];
    var headFixed = document.getElementsByClassName('head-fixed')[0];
    var imgRight = headFixed.getElementsByClassName('carriage')[0];
    var carriage = imgRight.getElementsByTagName('img')[0];
    var burger = headFixed.getElementsByClassName('burger')[0];
    var percent = headFixed.getElementsByClassName('html-percent')[0];
    var body = document.getElementsByTagName('body')[0];
    var timer = null;
    window.onscroll = function(){
        //百分比数值
        var percents = 0;
        //若发生滚动，img动，百分比显示
        if(scroll().top === 0){
            percent.style.display = 'none';
            // carriage.src = 'img/qq-1.png';

        }else{
            percent.style.display = 'block';
            // console.log(body.offsetHeight);
            //  百分比= 滚动高度 /（内容高度-最后一屏的页面高度）
            percents = Math.floor(parseInt((scroll().top / (body.offsetHeight - client().height)) * 100));
            percent.innerHTML = percents;
            //img右移
            // carriage.src = 'img/qq1.png';
            // buffer2(imgRight,{"left" : 100});

            clearInterval(imgRight.timer);
            imgRight.timer = setInterval(function(){
                var begin = parseInt(getCssAttr(imgRight,'left'));
                var speed = 39;
                if(begin >= 60 && begin < 100){
                    imgRight.style.left = begin + speed + 'px';
                    console.log(begin);
                    if(begin == 100) {
                        clearInterval(imgRight.timer);
                    }
                }
                /*else if(scroll().top === 0){
                    imgRight.style.left = begin - speed + 'px';
                    if(begin == 60) {
                        clearInterval(imgRight.timer);
                    }
                }*/
            },20)
        }
    }

    //    点击
    var burgerAdd = headFixed.getElementsByClassName('burger-add')[0];
    var x = burgerAdd.getElementsByClassName('x')[0];
    var pdfI = headFixed.getElementsByClassName('pdf-i')[0];
    var span = pdfI.getElementsByTagName('span')[0];
    // var timer = null;
    burger.onclick = function(){
        buffer2(burgerAdd,{"margin-right":0});
        buffer2(content,{"margin-left":-469});
        percent.style.zIndex = '-1';
    }
    x.onclick = function(){
        buffer2(burgerAdd,{"margin-right":-469});
        buffer2(content,{"margin-left":0});
        percent.style.zIndex = '100';
    }
    pdfI.onmouseenter = function () {
        span.innerHTML = 'Telecharger';
    }
    pdfI.onmouseleave = function () {
        span.innerHTML = '[PDF] photographies culinaires';
    }
