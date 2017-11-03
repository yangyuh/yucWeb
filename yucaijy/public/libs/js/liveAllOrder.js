$(function() {
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