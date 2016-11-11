/**
 * Created by Lysea on 2016/10/14.
//  */

var i=0;
$(function(){
    $(".banner-pic").not(":eq(0)").hide();   //不是第一张图片的其余图片都隐藏
    setInterval(function(){
        i++;
        if(i==2)
        {
            i=0;
        }
        $(".banner-pic").eq(i).show();           //第i个图片显示
        $(".banner-pic").not(":eq("+i+")").hide();             //不是第i个图片隐藏
    },2000);
})
 function show() {
     // var sidebar = document.getElementsByClassName("sidebar");
     if (document.getElementsByClassName) {
         var submenu = document.getElementsByClassName("sub-menu");
         if (submenu[0].style.display == 'none') {
             submenu[0].style.display = 'block';
         }
         else submenu[0].style.display = 'none';
     }
 }
$(document).ready(function(){
    $(".body-text").siblings("span").css("color","#0392ce");
    $(".body-text").siblings(".text-button").css("background","url(style/images/btn_01.png) no-repeat");
    $(".body-text").siblings(".text-button").click(function(){
        $(".body-text").slideToggle("fast");
    });
});
$(document).ready(function(){
    $(".article").hover(function(){
        $(this).children(".full-text").toggleClass("hover_bg")
    });
});