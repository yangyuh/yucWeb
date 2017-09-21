$(function() {
    console.dir(111)
    // 校区环境图片切换
    $("ul.hjlist").on("click", "li", function() {
        var length = $("ul.hjlist").children().length;
        var index = $(this).index();
        if (index > 2) {
            $("ul.hjlist").stop();
            $("ul.hjlist").animate({
                "left": -($(this).innerWidth() + 20) * (index - 2) + "px"
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
        var w = $("ul.hjlist").children().eq(0).innerWidth() + 20;
        var left = length * -w + w * 4;
        $("ul.hjlist").stop();
        $("ul.hjlist").animate({
            "left": left + "px"
        }, 500);
    });
})