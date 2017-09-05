$(function() {
    initbgh();

    // 监听窗口变化
    $(window).resize(function(event) {
        initbgh();
    });

    // banner轮播
    var timer = LeftMoveAuto(4, 4000);

    // 鼠标进入轮播停止
    $(".banner").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = LeftMoveAuto(4, 4000);
    })

    // 轮播小圆点控制
    $(".banner-btns li").on("click", function() {
        $(".banner-btns").stop();
        $(".banner-btns").find("li").removeClass("active");
        $(this).addClass("active");
        var index = $(".banner-btns").find("li").index(this);
        LeftMove(index);
    })

    // 首页导航选中操作 
    $(".nav-list li").on("click", function() {
        $(".nav-list").find("li").removeClass("active");
        $(this).addClass("active");
    })

    // 导航显示下拉菜单
    $(".ejmeun-leftnav li").on("click", function() {
        $(".ejmeun-leftnav").find("li").removeClass("active");
        $(this).addClass("active");
    })

    // 显示二级菜单的导航
    $(".nav-list li.showem a").hover(function() {
        $(".ejmeun .middle-page").stop();
        $(".ejmeun .middle-page").animate({ height: '278px' }, 300);
    }, function() {
        $(".ejmeun .middle-page").stop();
        $(".ejmeun .middle-page").animate({ height: 0 }, 300);
    })

    // 鼠标离开二级菜单
    $(".ejmeun").hover(function() {
        $(".ejmeun .middle-page").stop();
        $(".ejmeun .middle-page").animate({ height: '278px' }, 300);
    }, function() {
        $(".ejmeun .middle-page").stop();
        $(".ejmeun .middle-page").animate({ height: 0 }, 300);
    })

    // 底部图片效果
    $(".bottom-photo").hover(function() {
        $(this).children().eq(1).stop();
        $(this).children().eq(0).stop();
        $(this).children().eq(1).fadeIn(1000);
        $(this).children().eq(0).fadeOut(1000);
    }, function() {
        $(this).children().eq(1).stop();
        $(this).children().eq(0).stop();
        $(this).children().eq(1).fadeOut(1000);
        $(this).children().eq(0).fadeIn(1000);
    });

    // 登录框
    $(".login-reg-wraper .tag-title").on("click","li",function(){
        $(this).addClass("active").siblings().removeClass('active');
        console.log($(this).data("sid"))
        if($(this).data("sid") == "reg"){
            $(".form_inner").animate({
                left: "-100%"
            },500)
        } else {
            $(".form_inner").animate({
                left: "0"
            },500)
        }
    })
    // 登录按钮
    $(".nav-login").on("click","li",function(){
        if($(this).children().html() == "登录"){
            $(".form_inner").animate({
                left: "0"
            },500)
        } else {
            $(".form_inner").animate({
                left: "-100%"
            },500)
        }
        $(".login-reg-shadow").fadeIn(500)
    })
    // 关闭登录框
    $(".close_btn").click(function(){
        $(".login-reg-shadow").fadeOut(500);
    })
})

// 移动动画
function LeftMove(index) {
    $("ul.banner-imgs").animate({
        left: -(index * ($("ul.banner-imgs>li:nth-child(1)").outerWidth()))
    }, 1000);
}

// 自动移动
function LeftMoveAuto(num, t) {
    var index = 0;
    var timer = setInterval(function() {
        index++;
        if (index == num) {
            index = 0
        }
        LeftMove(index)
        $(".banner-btns").children().eq(index).addClass("active").siblings().removeClass('active')
    }, t);
    return timer;
}

// 轮播像左滑
function turnLeft() {
    var w = $("ul.banner-imgs>li:nth-child(1)").outerWidth();
    var left = $("ul.banner-imgs").css("left").replace(/px/, "") - 0;
    var length = $("ul.banner-imgs").children().length;
    if (left == 0) {
        left = -(length) * w;
    }
    left += w;
    $("ul.banner-imgs").animate({
        left: left + "px"
    }, 1000);
}

// 轮播像左滑
function turnRight() {
    var w = $("ul.banner-imgs>li:nth-child(1)").outerWidth();
    var left = $("ul.banner-imgs").css("left").replace(/px/, "") - 0;
    var length = $("ul.banner-imgs").children().length;
    left -= w;
    if (left == -(length) * w) {
        left = 0;
    }
    $("ul.banner-imgs").animate({
        left: left + "px"
    }, 1000);
}


// 返回顶部
function backTop() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    $('html, body').mouseenter()
}

// 初始化加载
function initbgh() {
    // 设置轮播背景图片高度
    getdblHeight($(".banner"), 470);
    // 设置底部背景图片高度
    getdblHeight($(".bottom-photo"), 438);
}

// 获取背景图片等比例高度
function getdblHeight(ele, imgheight) {
    var h = $(document).innerWidth() * imgheight / 1920;
    ele.css("height", h + "px");
}

// 关闭登录框
function close(){
    $(".login-reg-shadow").fadeOut(500);
}