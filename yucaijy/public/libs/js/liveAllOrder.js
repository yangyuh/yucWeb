$(function() {
    // 左边导航中样式
    $(".muenlist p").on("click", function() {
        $(".muenlist ").find("p").removeClass("active");
        $(".muenlist ").find("h4").removeClass("active");
        $(this).addClass("active");
    })
    // 左边一级导航点击事件
    $(".muenlist h4").on("click", function() {
        $(".muenlist ").find("h4").removeClass("active");
        $(".muenlist ").find("p").removeClass("active");
        if($(this).next('p').length == 1 ){
            $(this).next('p').addClass("active");
        } else {
            $(this).addClass("active");
        }
    })
    getMyClassTpl();
})

// 加载我的订单页面
function getMyOrderTpl() {
    var view = $('#contentRightView');
    var tpl = $('#myOrderTpl').html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
        $(".orderlist-nav li").on("click", function() {
            $(".orderlist-nav").find("li").removeClass("active");
            $(this).addClass("active");
        })
    });
}
// 加载我的课程页面
function getMyClassTpl() {
    var view = $('#contentRightView');
    var tpl = $('#myClassTpl').html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
    });
}
// 加载账号设置页面
function getSetingTpl() {
    var view = $('#contentRightView');
    var tpl = $('#userSetingTpl').html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
    });
}