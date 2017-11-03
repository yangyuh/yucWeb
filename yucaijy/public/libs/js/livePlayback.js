$(function() {
    $(".playback_nav li").on("click", function() {
        $(".playback_nav").find("li").removeClass("active");
        $(this).addClass("active");
    })
})