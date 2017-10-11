$(function() {
	// 誉财资讯点击事件
    // $(".topnav").on('click', 'li', function() {
    // 	$(this).addClass('active').siblings().removeClass('active');
    // });
    // // 新闻导航点击事件
    // $(".newsInfo-nav").on('click', 'li', function() {
    // 	$(this).addClass('active').siblings().removeClass('active');
    // })
    var uls = [$(".topnav"),$(".newsInfo-nav")];
    addActiveClass(uls)
})

function addActiveClass(uls){
	for(var i in uls){
		uls[i].on('click', 'li', function() {
	    	$(this).addClass('active').siblings().removeClass('active');
	    });
	}
}