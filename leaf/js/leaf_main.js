$(function () {

    // ヘッダーの位置がセクション部分に来たらスタイル変更（クラス付け外し）
    var $window = $(window),
        $header = $('.header'),
        sectionOffsetTop = $('.section-group').offset().top;

    $window.on('scroll', function () {
        if ($window.scrollTop() > sectionOffsetTop) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });


    // ハンバーガーメニュー
    // クリックしたらオープンをつける
    $('.nav-btn').on('click', function () {
        $('nav').toggleClass('open');
        $('.nav-btn').toggleClass('open');
    });

    // リンクをクリックしたらメニューが閉じる
    $('nav a').on('click', function () {
        $('nav').removeClass('open');
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


    // タブ
    $('.tabs').tabs();


    // お問い合わせフォーム
    // その他を選んだ時にテキストボックスが出る
    $('#other-text').hide();
    $('input[name="category"]').on('change', function () {
        if ($('#radio-other').is(':checked')) {
            $('#other-text').slideDown(200, function () {
                $('#other-textbox').focus();
            });
        } else {
            $('#other-text').slideUp(200);
            $('#other-textbox').val('');
        }
    });

    
    // プライバシーポリシーに同意のチェックをしたら送信ボタンを押せる
    $('#privacy-check').on('change', function () {
        if ($(this).is(':checked')) {
            $('.btn').filter('.__submit').prop('disabled', false);
        } else {
            $('.btn').filter('.__submit').prop('disabled', true);
        }
    });


    // ブラウザの自動チェックをオフ
    $('#form').attr('novalidate', true);
    // 送信ボタンを押したときに下記に当てはまる場合はアラートを出す
    // お名前が空欄、メールアドレスが空欄、メールアドレスに@がない、メッセージが空欄
    $('#form').on('submit', function (event) {
        if ($('#name').val() === '' ||
            $('#email').val() === '' ||
            $('#email').val().indexOf('@') === -1 ||
            $('#message').val() === '') {
            event.preventDefault();
            alert('必須項目を入力してください。メールアドレスは「@」を含めてください。');
        }
    });


});
