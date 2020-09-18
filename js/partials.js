$(window).scroll(function() {
    if ($(window).scrollTop() > 70) {
        $('#nav').addClass('nav-active');
    } else {
        $('#nav').removeClass('nav-active');
    }
});
