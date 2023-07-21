$(document).ready(function() {
    $(".nav-link").click(function(e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            var target = $(this).attr("href");
            $(target).collapse('toggle');
        }
    });
});