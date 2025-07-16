function toggleDescription(element) {
    const desc = element.querySelector('.description');
    desc.classList.toggle('hidden');
}

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


    // 上に戻る動作
    $('#toTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });