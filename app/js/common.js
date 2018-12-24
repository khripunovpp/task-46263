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

}

$(function() {
    app()
});