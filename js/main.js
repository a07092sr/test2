$(function () {
    // ハンバーガーメニュー
    // クリックしたらオープンをつける
    $('.nav-btn').on('click', function () {
        $('.sidebar').toggleClass('open');
        $('.nav').toggleClass('open');
        $('.nav-btn').toggleClass('open');
    });

    // リンクをクリックしたらメニューが閉じる
    $('.sidebar a').on('click', function () {
        $('.sidebar').removeClass('open');
        $('.nav').removeClass('open');
        $('.nav-btn').removeClass('open');
    });


    // ヘッダーロゴ
    // クリックしたらトップへ戻り、#をクリア
    $('.logo').on('click', function () {
        $.smoothScroll({
            easing: 'easeOutQuad',
            speed: 500,
            afterScroll: function () {
                history.replaceState(null, '', window.location.pathname);
            }
        });
    });

    // トップへ戻るボタン
    // スクロールしたらgo-topボタンが現れる
    var $window = $(window),
        $goTop = $('.go-top');

    $window.on('scroll', function () {
        if ($window.scrollTop() > $window.height() * 0.3) {
            $goTop.addClass('show');
        } else {
            $goTop.removeClass('show');
        }
    });

    // クリックしたらトップへ戻り、#をクリア
    $('.go-top').on('click', function () {
        $.smoothScroll({
            easing: 'easeOutQuad',
            speed: 500,
            afterScroll: function () {
                history.pushState(null, '', window.location.pathname);
            }
        });
    });


    // スライドショー
    $(document).ready(function () {
        $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 700,
            fade: true,
            cssEase: 'ease-in-out',
            autoplay: true,
            autoplaySpeed: 3500,
        });
    });


    // スクロールして表示領域に入ったらclass付与（inview）
    $(function () {
        $(".fade-up").on("inview", function () {
            $(this).addClass("inview");
        });
    });

    // 商品一覧ページ
    // ページ送り
    $(".items._all").paginathing({
        perPage: 6,
        containerClass: "panel-footer",
        prevText: '前へ',
        nextText: '次へ',
        firstLast: false,
        activeClass: 'items-active'
    });

    // ページを変えたらトップへ移動
    $(document).on('click', '.page-link', function () {
        $.smoothScroll({
            easing: 'easeOutQuad',
            speed: 100
        });
    });

    // 商品個別ページ
    // ライトボックス
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true
    })

    // アコーディオン
    $('.ac__text').hide();
    $('.ac__heading').on('click', function () {
        $('.ac__button').toggleClass('open');
        if ($('.ac__button').hasClass('open')) {
            $('.ac__text').slideDown();
        } else {
            $('.ac__text').slideUp();
        }
    });


});

