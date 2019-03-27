$(document).ready(function() {
    // 响应式头部
    var nav = {
        menuBtn: $('.menuBtn'),
        nav: $('.js-nav'),
        menu: $('.nav'),
        menuLi: $('.nav li'),
        menuLink: $('.nav li > a'),
        init: function() {
            var _this = this;
            this.menuBtn.append('<span></span>');
            this.menuBtn.on('click', function() {
                $(this).toggleClass('open');
                _this.nav.toggleClass('open');
            });
            this.resize(959);
        },
        resize: function(width) {
            this.menuLink.off('click');
            this.menuLi.off('mouseenter mouseleave');
            this.menu.find('.sub').stop(true, true).slideUp(0);
            if ($(window).innerWidth() < width) {
                this.menuLi.off('mouseenter mouseleave');
                this.menuLink.on('click', function() {
                    if ($(this).siblings('.sub').length) {
                        $(this).siblings('.sub').stop(true, true).slideToggle('fast').parent().siblings().find('.sub').stop(true, true).slideUp('fast');
                        return false;
                    }
                })
            } else {
                this.menuBtn.removeClass('open');
                this.nav.removeClass('open');
                this.menuLi.on('mouseenter', function() {
                    if ($(this).find('.sub').length) {
                        $(this).find('.sub').stop(true, true).slideDown('fast');
                    }
                });
                this.menuLi.on('mouseleave', function() {
                    $(this).find('.sub').stop(true, true).slideUp('fast');
                });
            }
        }
    };
    nav.init();
    var resizeTimer = null;
    $(window).on('resize', function() {
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(function() {
            nav.resize(959);
        }, 100);
    });


    //等高
    function autoScrolling() {
        var maxH = 0;
        $('.fd-lk2 dl').css('height', 'auto');
        $('.fd-lk2 dl').each(function(index, val) {
            var innerH = $(this).innerHeight();
            if (innerH > maxH) {
                maxH = innerH;
            }
            $(this).css('height', maxH);
        });
    }
    autoScrolling();
    $(window).resize(function() {
        autoScrolling();
    });

    // 默认展开需要展开的
    var $foldBlock = $('.js-fold');
    $foldBlock.find('.on .desc').slideDown();

    $foldBlock.on('click', '.tit', function(e) {
        var $fold = $(e.delegateTarget);
        var $on = $fold.find('.on');
        var $onDesc = $on.find('.desc');

        var $cur = $(this);
        var $curDesc = $cur.siblings('.desc');
        var $curParent = $cur.parent('.item');

        if ($curParent.hasClass('on')) {
            $curDesc.slideUp('fast');
            $curParent.removeClass('on');
        } else {
            $curDesc.slideDown('fast');
            $curParent.addClass('on');

            if ($fold.data('autofold') == 1) {
                $on.removeClass('on');
                $onDesc.slideUp('fast');
            }
        }
    });

    //点击加载更多
    $('.js-more').on('click', function() {
        $('.ul-imgtxt-g12').slideToggle(500);
        if ($(this).text() == "查看更多") {
            $(this).text("收起");
        } else {
            $(this).text("查看更多");
        }

    })

    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).addClass('ok').siblings(con).removeClass('ok');
    });

    $(".TAB_CLICK2 li").click(function() {
        var tab = $(this).parent(".TAB_CLICK2");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });

    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "2",
            "bdSize": "16"
        },
        "share": {}
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'https://www.haohead.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
});