$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-190px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 10
        }, 'slow');
    });
});