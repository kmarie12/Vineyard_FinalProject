$(document).ready(function () {
    $('#scroll').click(function () {
        $('.box').animate({
            scrollTop: '+=100'
        }, 100);
    });
});