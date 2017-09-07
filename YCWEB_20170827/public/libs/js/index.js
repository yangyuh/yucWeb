$(function() {
    initPage();

    // 精品面授过程阴影过渡效果
    $(".section1-list li").hover(function() {
        $(this).find(".shadow").stop().fadeIn(500)
    }, function() {
        $(this).find(".shadow").stop().fadeOut(500)
    })

    // 誉财网络学院 导航选中操作 
    $(".section2-content-nav li").on("click", function() {
        $(this).addClass("active").siblings().removeClass('active');
    })
    // 播放图标交互效果
    $(".wraper .btns").hover(function(){
        $(this).children().eq(0).stop().fadeOut(300);
        $(this).children().eq(1).stop().fadeIn(300);
    },function(){
        $(this).children().eq(0).stop().fadeIn(300);
        $(this).children().eq(1).stop().fadeOut(300);
    })

    // 权威备考交互
    $("ul.section3-list li .item").hover(function() {
        $(this).children('.btns').children().eq(0).addClass("active");
    }, function() {
        $(this).children('.btns').children().removeClass("active");
    })
    $("ul.section3-list .item .btns div").hover(function() {
        $(this).addClass("active").siblings().removeClass('active');
    })

    // 校区开班动态 导航选中操作 
    $(".section3_01-nav ul li").on("click", function() {
        $(this).addClass("active").siblings().removeClass('active');
    })

    // 校区开班滚动
    $('#xqkb_Scroll').myScroll({
        speed: 40, //数值越大，速度越慢
        rowHeight: 40 //li的高度
    });

    // 咨询问答滚动
    $('#zxwd_Scroll').myScroll({
        speed: 80, //数值越大，速度越慢
        rowHeight: 30 //li的高度
    });


    // 名师团队阴影过渡效果
    $(".section4-list li").hover(function() {
        $(this).find(".shadow").stop().fadeIn(500);
    }, function() {
        $(this).find(".shadow").stop().fadeOut(500);
    })

    // 明星学员风采过渡效果
    $(".section6-list li").hover(function() {
        if ($(this).attr('class') != 'center') {
            $(this).find("img").stop();
            $(this).find("img").eq(1).fadeIn(800);
            $(this).find("img").eq(0).fadeOut(800)
        }
    }, function() {
        if ($(this).attr('class') != 'center') {
            $(this).find("img").stop();
            $(this).find("img").eq(0).fadeIn(800);
            $(this).find("img").eq(1).fadeOut(800);
        }
    })

    // 誉财教育之道过渡效果
    $(".section8-list li").hover(function() {
        $(this).find(".hidea").stop().fadeIn(300);
        $(this).find(".showa").stop().fadeOut(300);
    }, function() {
        $(this).find(".hidea").stop().fadeOut(300);
        $(this).find(".showa").stop().fadeIn(300);
    })

    // 誉财校区分布交互效果(left)
    $("ul.section7-xqfb-list li .xqnr-bg-l").hover(function() {
        xqfbMouseenter($(this), "left");
    }, function() {
        xqfbMouseLeave($(this), "left");
    })

    // 誉财校区分布交互效果(right)
    $("ul.section7-xqfb-list li .xqnr-bg-r").hover(function() {
        xqfbMouseenter($(this), "right");
    }, function() {
        xqfbMouseLeave($(this), "right");
    })

    // 校区图片交互效果(left)
    $("ul.section7-xqfb-list li.left .xq-img").hover(function() {
        xqfbMouseenter($(this).next(), "left");
    }, function() {
        xqfbMouseLeave($(this).next(), "left");
    })

    // 校区图片交互效果(right)
    $("ul.section7-xqfb-list li.right .xq-img").hover(function() {
        xqfbMouseenter($(this).prev(), "right");
    }, function() {
        xqfbMouseLeave($(this).prev(), "right");
    })

    

    // 网络学院背景图片自适应
    $(window).resize(function(){
        getdblHeight($('.mszbbg'),519);
        getdblHeight($('.jclbbg'),519);
        getdblHeight($('.zntkbg'),519);
    })
});

// 校区分布交互效果(鼠标进入)
function xqfbMouseenter(ele, isl) {
    if (isl == 'left') {
        ele.next().children().eq(1).css("background", "#035ade");
    } else {
        ele.prev().children().eq(1).css("background", "#035ade");
    }
    ele.children('.shadow').stop().animate({ opacity: 0.8 }, 500);
    ele.children('.shadow-btns').stop().fadeIn(500);
}

// 校区分布交互效果(鼠标离开)
function xqfbMouseLeave(ele, isl) {
    if (isl == 'left') {
        ele.next().children().eq(1).css("background", "#f7f7f7");
    } else {
        ele.prev().children().eq(1).css("background", "#f7f7f7");
    }
    ele.children('.shadow').stop().animate({ opacity: 0 }, 500);
    ele.children('.shadow-btns').stop().fadeOut(500);
}

// 初始化加载
function initPage() {
    ViewMSZBContent();
    ViewKJKC();
}

// 二级菜单会计课程模块
function ViewKJKC() {
    var view = $("#kclistView");
    var tpl = $("#kjkcTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
    });
}

// 二级菜单会计课程模块
function ViewXLKC() {
    var view = $("#kclistView");
    var tpl = $("#xlkcTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
    });
}

// 二级菜单财税实账模块
function ViewCSSZ() {
    var view = $("#kclistView");
    var tpl = $("#csszTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
    });
}
// 加载名师直播模块
function ViewMSZBContent() {
    var view = $("#floor2ContentView");
    var tpl = $("#mszbTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
        getdblHeight($('.mszbbg'),519);
    });
}

// 加载精品录播模块
function ViewJPLBContent() {
    var view = $("#floor2ContentView");
    var tpl = $("#jplbTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
        getdblHeight($('.jclbbg'),519);
    });
}

// 加载智能题库模块
function ViewZLTkContent() {
    var view = $("#floor2ContentView");
    var tpl = $("#zntkTpl").html();
    laytpl(tpl).render([], function(html) {
        view.html(html);
        getdblHeight($('.zntkbg'),519);
    });
}

