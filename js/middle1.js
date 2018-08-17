$(function () {
    $(".smbox").mouseenter(function () {
        $(".smbox").animate({top:"+=10px"},"fast",function(){
            $(".smbox").find("span").animate({left:"100%"},300)
        })
    });
    $(".smbox").mouseleave(function () {
        $(".smbox").animate({top:"-=10px"},"fast",function(){
            $(".smbox").find("span").animate({left:"0"},300)
        })
    })
    $(".a1").mouseenter(function () {
        $("span").animate({left:"+=100%"},200);
        $("span").animate({top:"+=10%"},10);
        $("span").animate({left:"-=200%"},10);
        $("span").animate({top:"-=10%"},10);
        $("span").animate({left:"+=100%"},200);
    })
    var index = 0 , change = index ,max = 3;
    $(".control2").click(function () {
        if(change == max){
            change = index;
        }else {
            change ++;
        }
        $(".carousel2").animate({left:-change*1050 +"px"},1500)
    })
    $("#a1").mouseenter(function () {
        $("#a1").find("img").fadeTo(300,0.6);
    })
    $("#a1").mouseleave(function () {
        $("#a1").find("img").fadeTo(300,0);
    })
    $("#a2").mouseenter(function () {
        $("#a2").find("img").fadeTo(300,0.6);
    })
    $("#a2").mouseleave(function () {
        $("#a2").find("img").fadeTo(300,0);
    })
    $("#a3").mouseenter(function () {
        $("#a3").find("img").fadeTo(300,0.6);
    })
    $("#a3").mouseleave(function () {
        $("#a3").find("img").fadeTo(300,0);
    })


})
/*
window.onscroll2 = function () {
    var roll = Math.ceil(scroll().top);
    var cc =document.getElementsByClassName('content-carousel-bottom')[0];
    x = 0.23*(roll - cc.offsetTop);
    var carousel2 = document.getElementsByClassName('carousel2')[0];
    carousel2.style.top = x +'px';
    console.log(carousel2);
    /!*var ii2= document.getElementsByClassName("ii2")[0];
    ii2.style.top = x +'px';*!/
    // var control2= document.getElementsByClassName("control2")[0];
    // control2.style.bottom = -x +'px';
}*/
