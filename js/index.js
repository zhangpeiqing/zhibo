$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(800).siblings(".mfexa_type").hide();
    })
    $(".ffol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".ffexa_type").eq($(this).index()).stop().slideDown(800).siblings(".ffexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},600);
    });
    $(".point2").click(function(){
        $("html , body").animate({scrollTop:$(".m2").offset().top},1000);
    });
    $(".point3").click(function(){
        $("html , body").animate({scrollTop:$(".m3").offset().top},1200);
    });
    $(".point4").click(function(){
        $("html , body").animate({scrollTop:$(".zg_address").offset().top},1500);
    });
    $(window).scroll(function(){
        var top = $(".ht").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })
})