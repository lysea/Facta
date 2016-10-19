/**
 * Created by Lysea on 2016/10/14.
 */
window.onload = function(){

    var images = document.getElementsByClassName('banner-pic');
    var pos = 0;
    var len = images.length;
    setInterval(function(){

        images[pos].style.display = 'none';
        pos = ++pos == len ? 0 : pos;
        images[pos].style.display = 'inline';

    },2000);
    //鼠标停留在画面时停止自动动画，离开恢复
    // $("#banner_pic_wrap").mouseover(function(){
    //     clearTimeout(_interval);
    // });
    // $("#banner_pic_wrap").mouseout(function(){
    //     _interval=setInterval(showTime,2000);
    // });

};
 function show() {
     // var sidebar = document.getElementsByClassName("sidebar");
     if (document.getElementsByClassName) {
         var submenu = document.getElementsByClassName("sidebar-menu");
         if (submenu[0].style.display == 'none') {
             submenu[0].style.display = 'block';
         }
         else submenu[0].style.display = 'none';
     //     alert("cnueiwb");
     }
 }