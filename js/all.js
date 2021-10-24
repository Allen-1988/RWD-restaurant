$(document).ready(function () {
    //漢堡選單
    $(".menu_bar").click(function (e) { 
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
    //加入最愛
    $(".fa-heart").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("fas").toggleClass("far");
    });
});