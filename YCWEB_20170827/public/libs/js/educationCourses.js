$(function() {
    $(".section7 ul.questions li .item .icons").hover(function() {
        $(this).children().eq(0).stop().fadeOut(500);
        $(this).children().eq(1).stop().fadeIn(500);
        $(this).next().addClass("blue-text");
    }, function() {
        $(this).children().eq(0).stop().fadeIn(500);
        $(this).children().eq(1).stop().fadeOut(500);
        $(this).next().removeClass("blue-text");
    })
})