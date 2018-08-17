$(function () {
    $(".laga>.anniu").mouseover(function () {
        $(".laga>.anniu>a")
            .stop()
            .animate({lineHeight:410},10)
            .animate({left:"1%"},10)
        $(".laga>.anniu>span")
            .stop()
            .animate({height:1},1)
            .animate({left:"100%"},100)
            .animate({opacity:0},50)
    })
    $(".laga>.anniu").mouseout(function () {
        $(".laga>.anniu>a").stop().animate({
            lineHeight:400,
            left:"0"
        },20)
        $(".laga>.anniu>span")
            .stop()
            .animate({left:"0"},100)
            .animate({opacity:1},50)
            .animate({height:2},1)
    })


    // 第二部分按钮效果
    $(".phogra>.nr>.ah0>.ah1").mouseover(function () {
        $(".phogra>.nr>.ah0>.ah1>.rightspan")
            .stop()
            .animate({
                right:"-100%"
            },1000)
            .animate({
                top:"75%"
            },10)
            .animate({
                right:"80%"
            },10)
            .animate({
                top:"73%"
            },10)
            .animate({
                right:"6%"
            },1000)
    })
    $(".phogra>.nr>.ah0>.ah1").mouseout(function () {
        $(".phogra>.nr>.ah0>.ah1>.rightspan")
            .stop()
    })


    //右侧按钮效果
    $(".phogra>.nr>.ah3>.ah33").mouseover(function () {
        $(".phogra>.nr>.ah3>.ah33>.rightspan1")
            .stop()
            .animate({
                right:"-100%"
            },1000)
            .animate({
                bottom:"5%"
            },10)
            .animate({
                right:"80%"
            },10)
            .animate({
                bottom:"10.5%"
            },10)
            .animate({
                right:"8%"
            },1000)
            .stop()
    })
    $(".phogra>.nr>.ah3>.ah33").mouseout(function () {
        $(".phogra>.nr>.ah3>.ah33>.rightspan1")
            .stop()
    })

    //回到顶部
    $(".lasta").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
})