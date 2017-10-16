// 旋转次数
var num = 0;

$(function() {
    // 旋转效果
    $(".center_btn").click(function() {
        num += 1;
        if (num == 8) {
            num = 0;
        }
        $(".rotate_wraper").stop();
        $(".rotate_wraper").animate({
            rotate: 45 * num
        }, 1000);
    });
    // 校区环境图片切换
    $(".outer_wraper ul").on("click", "li", function() {
        var length = $(".outer_wraper ul").children().length;
        var index = $(this).index();
        if (index > 1) {
            $(".outer_wraper ul").stop();
            $(".outer_wraper ul").animate({
                "left": -$(this).innerWidth() * (index - 1) + "px"
            }, 500);
        } else {
            $(".outer_wraper ul").stop();
            $(".outer_wraper ul").animate({
                "left": "0px"
            }, 500);
        }
    });
    // 返回第一张
    $(".pre").click(function() {
        var left = $(".outer_wraper ul").css("left").replace('px', '');
        if (left < 0) {
            left = 0;
            $(".outer_wraper ul").stop();
            $(".outer_wraper ul").animate({
                "left": left + "px"
            }, 500);
        }
    });
    // 调到最后一张
    $(".next").click(function() {
        var length = $(".outer_wraper ul").children().length;
        var w = $(".outer_wraper ul").children().eq(0).innerWidth();
        var left = length * -w + w * 3;
        $(".outer_wraper ul").stop();
        $(".outer_wraper ul").animate({
            "left": left + "px"
        }, 500);
    });
})