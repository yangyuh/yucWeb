$(function() {
    console.dir(111)
    // 校区环境图片切换
    $("ul.hjlist").on("click", "li", function() {
        var length = $("ul.hjlist").children().length;
        var index = $(this).index();
        var margin_r = $(this).css("margin-right").replace('px', '') - 0;
        if (index > 2) {
            $("ul.hjlist").stop();
            $("ul.hjlist").animate({
                "left": -($(this).innerWidth() + margin_r) * (index - 2) + "px"
            }, 500);
        } else {
            $("ul.hjlist").stop();
            $("ul.hjlist").animate({
                "left": "0px"
            }, 500);
        }
    });
    // 返回第一张
    $(".pre").click(function() {
        var left = $("ul.hjlist").css("left").replace('px', '');
        if (left < 0) {
            left = 0;
            $("ul.hjlist").stop();
            $("ul.hjlist").animate({
                "left": left + "px"
            }, 500);
        }
    });
    // 调到最后一张
    $(".next").click(function() {
        var length = $("ul.hjlist").children().length;
        var margin_r = $("ul.hjlist").children().eq(0).css("margin-right").replace('px', '') - 0;
        var w = $("ul.hjlist").children().eq(0).innerWidth() + margin_r;
        var left = length * -w + w * 4;
        $("ul.hjlist").stop();
        $("ul.hjlist").animate({
            "left": left + "px"
        }, 500);
    });
})