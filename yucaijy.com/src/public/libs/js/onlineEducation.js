// 一级图标
$(".one-level-icons").hover(function() {
    $(this).children().children().eq(0).stop().fadeOut(500);
    $(this).children().children().eq(1).stop().fadeIn(500);
    $(this).children().eq(1).addClass('blue-text');
    $(this).next().stop().fadeIn(500);
}, function() {
    $(this).children().children().eq(0).stop().fadeIn(500);
    $(this).children().children().eq(1).stop().fadeOut(500);
    $(this).children().eq(1).removeClass('blue-text');
    $(this).next().stop().fadeOut(500);
})

// 二级图标交互 
$(".two-level-icons .item").hover(function() {
    $(this).children().children().eq(0).stop().fadeOut(500);
    $(this).children().children().eq(1).stop().fadeIn(500);
    $(this).children().eq(1).addClass('blue-text');
    $(this).parent().stop().fadeIn(500);

    $(this).parent().prev().children().children().eq(0).stop().fadeOut(500)
    $(this).parent().prev().children().children().eq(1).stop().fadeIn(500);
    $(this).parent().prev().children().eq(1).addClass('blue-text');
}, function() {
    $(this).children().children().eq(0).stop().fadeIn(500);
    $(this).children().children().eq(1).stop().fadeOut(500);
    $(this).children().eq(1).removeClass('blue-text');
    $(this).parent().stop().fadeOut(500);

    $(this).parent().prev().children().children().eq(0).stop().fadeIn(500);
    $(this).parent().prev().children().children().eq(1).stop().fadeOut(500);
    $(this).parent().prev().children().eq(1).removeClass('blue-text');
})