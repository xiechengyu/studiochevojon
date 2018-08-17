/*获取元素*/
/*var header = document.getElementsByClassName('header')[0];
var headerImg = header.getElementsByClassName('header_img')[0];*/


var con1 = document.getElementsByClassName('content1')[0];
var con1img = con1.getElementsByClassName('content1_img_content')[0];

var img = con1img.getElementsByTagName('img');
var btn = con1.getElementsByTagName('button')[0];
var timer = null;
var end = 0;
btn.onclick = function () {
    next_pic();
}

function next_pic() {
    var length = 1050;

    var newLeft = parseInt(getCssAttr(con1img, "left"));
    if (newLeft == -3150) {
        end = 0;
    } else {
        end = end - length;
    }
    console.log(newLeft);
    console.log(end);
    buffer2(con1img, {"left": end});

}
/*
window.onscroll3 = function () {
    /!*监测鼠标滚轮事件*!/
    var roll = Math.ceil(scroll().top);


    /!*头部图片放大*!/
    var headerI= document.getElementsByClassName('header_img')[0];
    var headerImg = headerI.getElementsByTagName('img')[0];
    var Iw = parseInt(getCssAttr(headerImg,"width"));
    console.log(Iw);
    var Ih = parseInt(getCssAttr(headerImg,"height"));
    console.log(Ih);
    var lf= 0,lt = 0;
    /!*var Itop = roll-headerI.offsetTop;*!/
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
    console.log(2222);
    /!*  console.log(lf);
      console.log(lt);*!/
    headerImg.style.width = Iw+"px";
    headerImg.style.height = Ih +"px";
    /!*headerImg.style.left = -lf+"px";
    headerImg.style.top = -lt+"px";*!/
    /!*轮播图向下实验*!/
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



}*/
