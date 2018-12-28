var app = function() {

    $('.main__cardStack').on('click', function(event) {
        $('.main__loading').fadeIn(200, function() {
            setTimeout(function() {
                $('.main__first').fadeOut(200)
                $('.main__second').fadeIn(200, function() {
                    $('.main__loading').fadeOut(100)
                })
            }, 2000)
        });
    });

    $('a').click(function(e) {
        e.preventDefault();
        var a = $('.js_submit');
        var b = a.closest('form');

        if ($('form#toform').length) {
            a = $('#toform .js_submit');
            b = a.closest('form#toform');
        }

        if (b.length && a.is(':visible')) {
            $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
        }
        return false;
    });

}

$(function() {
    app()
});