$(function() {
    var uls = [$(".topnav"),$(".newsInfo-nav")];
    // addActiveClass(uls)
})

function addActiveClass(uls){
	for(var i in uls){
		uls[i].on('click', 'li', function() {
	    	$(this).addClass('active').siblings().removeClass('active');
	    });
	}
}