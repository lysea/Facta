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
window.onload=function () {
         var submenu = document.getElementsByClassName("sub-menu");
         var open = document.getElementById("open");
         var on="none";
         open.onclick=function () {
         if (on == 'none') {
             submenu[0].style.display = 'block';
             on="block";
             open.style.color="#0392ce";
         }
         else {
             submenu[0].style.display = 'none';
             on="none";
             open.style.color="#000";
         }
     }
}
$(document).ready(function(){
    $(".on").click(function(){
        $(".body-text").slideUp("fast");
        $(".text-header").removeClass("blue");
        $(this).siblings(".body-text").slideDown("fast");
        $(this).siblings(".text-header").addClass("blue");
    });
    $(".off").click(function(){
        $(this).parent(".body-text").slideUp("fast");
        $(this).parent(".body-text").siblings(".text-header").removeClass("blue");
    });
});
$(document).ready(function(){
    $(".article a").hover(function(){
        $(this).children(".full-text").toggleClass("hover_bg")
    });
});