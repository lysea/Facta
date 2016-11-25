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
         var open = document.getElementById("open");
         if (submenu[0].style.display == 'none') {
             submenu[0].style.display = 'block';
             open.style.color="#0392ce";
         }
         else submenu[0].style.display = 'none';
         open.style.color="#000";
     }
 }
$(document).ready(function(){
    $(".row-blue").children("span").css("color","#0392ce");
    $(".body-text").children(".off").css("background","url(style/images/btn_01.png) no-repeat");
    $(".body-text").siblings(".on").css("background","url(style/images/btn_01.png) no-repeat");
    $(".on").click(function(){
        if($(".body-text").is(':visible')){
            $(".body-text").hide();
        }
        $(this).siblings(".body-text").slideDown("fast");
    });
    $(".off").click(function(){
        $(this).parent(".body-text").slideUp("fast");
    });
});
$(document).ready(function(){
    $(".article a").hover(function(){
        $(this).children(".full-text").toggleClass("hover_bg")
    });
});