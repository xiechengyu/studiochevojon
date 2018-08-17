    var content = document.getElementsByClassName('content')[0];
    var headFixed = document.getElementsByClassName('head-fixed')[0];
    var imgRight = document.getElementsByClassName('carriage')[0];
    var burger = document.getElementsByClassName('burger')[0];
    var percent = document.getElementsByClassName('html-percent')[0];
    var body = document.getElementsByTagName('body')[0];
    var timer = null;
    var roll = Math.ceil(scroll().top);
    window.onscroll1 = function(){
        /*监测鼠标滚轮事件*/
        // var roll = Math.ceil(scroll().top);


        /*头部图片放大*/
        var headerI= document.getElementsByClassName('header_img')[0];
        var headerImg = headerI.getElementsByTagName('img')[0];
        var Iw = parseInt(getCssAttr(headerImg,"width"));
        console.log(Iw);
        var Ih = parseInt(getCssAttr(headerImg,"height"));
        console.log(Ih);
        var lf= 0,lt = 0;
        /*var Itop = roll-headerI.offsetTop;*/
        console.log(roll);
        var Ibegin = 0;
        if (roll> 0&& roll <= 1200){
            Iw = Iw + parseFloat(roll/200);
            Ih = Ih + parseFloat(roll/200);
            lf = lf + parseFloat(roll/70);
            lt = lt + parseFloat(roll/70);
        }else {
            Iw =1050;
            Ih =705;
            lf = 0;
            lt = 0;
        }

        /*  console.log(lf);
          console.log(lt);*/
        headerImg.style.width = Iw+"px";
        headerImg.style.height = Ih +"px";
        /*headerImg.style.left = -lf+"px";
        headerImg.style.top = -lt+"px";*/
        /*轮播图向下实验*/
        var cc1 =document.getElementsByClassName('content1_img')[0];
        var y = 0.3*(roll - cc1.offsetTop);
        var carousel1 = document.getElementsByClassName('content1_img_content')[0];
        var button1 = cc1.getElementsByTagName('button')[0];
        if(roll>=200 &&roll <=3450){

            carousel1.style.top = y-350 +'px';
            button1.style.top = y+160 +'px';
        }else {
            carousel1.style.top = 0 +'px';
            button1.style.top = 0 +'px';
        }





        // var roll = Math.ceil(scroll().top);
        var cc =document.getElementsByClassName('content-carousel-bottom')[0];
        x = 0.23*(roll - cc.offsetTop);
        var carousel2 = document.getElementsByClassName('carousel2')[0];
        carousel2.style.top = x +'px';
        console.log(carousel2);
        /*var ii2= document.getElementsByClassName("ii2")[0];
        ii2.style.top = x +'px';*/
        // var control2= document.getElementsByClassName("control2")[0];
        // control2.style.bottom = -x +'px';


        //百分比数值
        var percents = 0;
        //若发生滚动，img动，百分比显示
        if(roll === 0){
            percent.style.display = 'none';
            // carriage.src = 'img/qq-1.png';

        }else{
            percent.style.display = 'block';
            // console.log(body.offsetHeight);
            //  百分比= 滚动高度 /（内容高度-最后一屏的页面高度）
            percents = Math.floor(parseInt((roll / (body.offsetHeight - client().height)) * 100));
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
                    // console.log(begin);
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


    window.onscroll2 = function () {

    }

    window.onscroll3 = function () {

    }
    //    点击
    var burgerAdd = document.getElementsByClassName('burger-add')[0];
    var x = document.getElementsByClassName('x')[0];
    var pdfI = document.getElementsByClassName('pdf-i')[0];
    var span = document.getElementById('ss');
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
