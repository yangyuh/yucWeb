$(function() {
    // 设置轮播背景图片高度
    getdblHeight($(".banner"), 470);
    // 设置底部背景图片高度
    getdblHeight($(".bottom-photo"), 438);

    // 监听窗口变化
    $(window).resize(function(event) {
        // 设置轮播背景图片高度
        getdblHeight($(".banner"), 470);
        // 设置底部背景图片高度
        getdblHeight($(".bottom-photo"), 438);
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
    $(".login-reg-wraper .tag-title").on("click", "li", function() {
        $(this).addClass("active").siblings().removeClass('active');
        console.log($(this).data("sid"))
        if ($(this).data("sid") == "reg") {
            $(".form_inner").animate({
                left: "-100%"
            }, 500)
        } else {
            $(".form_inner").animate({
                left: "0"
            }, 500)
        }
    })

    // 登录按钮
    $(".nav-login").on("click", "li", function() {
        if ($(this).children().html() == "登录") {
            $(".form_inner").animate({
                left: "0"
            }, 500)
        } else {
            $(".form_inner").animate({
                left: "-100%"
            }, 500)
        }
        $(".login-reg-shadow").fadeIn(500)
    })

    // 关闭登录框
    $(".close_btn").click(function() {
        $(".login-reg-shadow").fadeOut(500);
    });

    // 环境图片切换
    $(".outer_wraper ul").on("click", "li", function() {
        var length = $(".outer_wraper ul").children().length;
        var src = $(this).children().children('img').attr("src");
        $(this).addClass('active').siblings().removeClass('active');
        $(".bigimg").children('img').attr("src", src);
        var index = $(this).index();
        if (index > 3) {
            $(".outer_wraper ul").stop();
            $(".outer_wraper ul").animate({ "left": -212 * (index - 3) + "px" }, 500);
        } else {
            $(".outer_wraper ul").animate({ "left": "0px" }, 500);
        }
    });

    // 侧边固定导航交互效果
    $(".right-nav li").hover(function() {
        // 边框变化
        $(this).css({
            border: "1px solid #035ade",
            color: "#035ade"
        });
        $(this).next().css({
            borderTop: "1px solid #035ade",
        });
        // 图标变换
        var newSrc = $(this).children().eq(0).children('img').attr("src").replace(/\.png/, "");
        $(this).children().eq(0).children('img').attr("src", newSrc + "_01.png");
    }, function() {
        $(this).css({
            border: "1px solid #9d9d9d",
            color: "#7c7c7c"
        });
        $(this).next().css({
            borderTop: "1px solid #9d9d9d",
        });
        // 图标变换
        var newSrc = $(this).children().eq(0).children('img').attr("src").replace(/_01/, "");
        $(this).children().eq(0).children('img').attr("src", newSrc);
    });

    // 返回顶部按钮动画
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 10) {
            $(".right-nav li:last-child").css({ bottom: "-58px" });
        } else {
            $(".right-nav li:last-child").css({ bottom: "-200px" });
        }
    });
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

// 获取背景图片等比例高度
function getdblHeight(ele, imgheight) {
    var h = $(document).innerWidth() * imgheight / 1920;
    ele.css("height", h + "px");
}

// 关闭登录框
function close_longin() {
    $(".login-reg-shadow").fadeOut(500);
}

// 显示视频播放窗口
function showVideoWraper() {
    $("#video_shadow").fadeIn(300);
}

// 关闭视频播放窗口
function closeVideoWraper() {
    var myPlayer = videojs('my-video');
    myPlayer.pause();
    $("#video_shadow").fadeOut(300);
}

// 图片切换回到第一张
function pre() {
    var left = $(".outer_wraper ul").css("left").replace('px', '');
    if (left < 0) {
        left = 0;
        $(".outer_wraper ul").animate({ "left": left + "px" }, 500);
    }
}

// 图片切换最后一张
function next() {
    var length = $(".outer_wraper ul").children().length;
    var left = length * -212 + 212 * 5;
    $(".outer_wraper ul").animate({ "left": left + "px" }, 500);
}

// 设置大背景图片高度
function set_sections_h(sections){
    var bgeles = sections;
    for(var i in bgeles){
        var s = bgeles[i].split("-")[0];
        var h = bgeles[i].split("-")[1]-0;
        var ele = $(".section" + s);
        getdblHeight(ele,h)
    }
}

// 设置大背景图片高度
function set_contents_h(contents){
    var bgeles = contents;
    for(var i in bgeles){
        var s = bgeles[i].split("-")[0];
        var h = bgeles[i].split("-")[1]-0;
        var ele = $(".content" + s);
        getdblHeight(ele,h)
    }
}
