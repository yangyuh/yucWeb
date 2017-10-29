function shoeImgTextContent($this) {
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