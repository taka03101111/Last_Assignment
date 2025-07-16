$(function () {
    // TOPボタン表示・非表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    // ボタンを押すとページトップに戻る
    $('#toTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});
