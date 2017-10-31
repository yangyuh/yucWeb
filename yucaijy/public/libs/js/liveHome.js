
// 被隐藏ul左边距离
var left1 = 0;
var left2 = 0;

$(function() {
    // 初级会计职称直播精讲班
    initOverUlWidth('main1_list');
    // 最新直播动态
    initOverUlWidth('main2_list');
    // 时间轴的宽度
    initOverUlWidth('time-list');
    // 最新直播动态时间轴颜色改变
    $('#main2_list li').hover(function() {
        $('#time-list').children().eq($(this).index()).children('p').css('color','#3583e6')
    }, function() {
        $('#time-list').children().eq($(this).index()).children('p').css('color','#494949')
    });
})
// 显示展开内容
function showImgTextContent($this) {
    if ($this.html() == '点击展开内容') {
        $this.html('点击收起内容');
        var view = $('#imgTextView');
        var tpl = $('#imgTextTpl').html();
        laytpl(tpl).render([], function(html) {
            view.html(html);
        });
    } else {
        $this.html('点击展开内容');
        var view = $('#imgTextView').html('');
    }
}
// 向下翻
function next($this, left) {
    var ul = $this.parent().find('.list-outer').children('ul');
    var lis = ul.children();
    var li_width = lis.eq(0).outerWidth();
    // 长度差
    var w = ul.parent().width()-ul.width();
    var l = -(w/li_width).toFixed(0);
    if (left == 'left1') {
        if (left1 > -li_width * l) {
            left1 -= li_width;
        }
        ul.animate({ "left": left1 + "px" }, 500);
    } else {
        if (left2 > -li_width * l) {
            left2 -= li_width;
        }
        ul.animate({ "left": left2 + "px" }, 500);
        // 时间轴向右移动
        $('#time-list').animate({ "left": left2 + "px" }, 500);
    }
}
// 向下翻
function prev($this, left) {
    var ul = $this.parent().find('.list-outer').children('ul');
    var lis = ul.children();
    var li_width = lis.eq(0).outerWidth();
    if (left == 'left1') {
        if (left1 < 0) {
            left1 += li_width;
        }
        ul.animate({ "left": left1 + "px" }, 500);
    } else {
        if (left2 < 0) {
            left2 += li_width;
        }
        ul.animate({ "left": left2 + "px" }, 500);
        // 时间轴向左移动
        $('#time-list').animate({ "left": left2 + "px" }, 500);
    }
}
// 初始化隐藏ul列表的宽度
function initOverUlWidth(ulid) {
    var w = $('#' + ulid).children().eq(0).outerWidth();
    var l = $('#' + ulid).children().length + 1;
    $('#' + ulid).css('width', w * l);
}