/**
 * Created by Lysea on 2016/10/14.
//  */

// window.onload = function(){
//
//     var images = document.getElementsByClassName('banner_pic');
//     var pos = 0;
//     var len = images.length;
//     setInterval(function(){
//
//         images[pos].style.display = 'none';
//         pos = ++pos == len ? 0 : pos;
//         images[pos].style.display = 'inline';
//
//     },2000);
// };

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