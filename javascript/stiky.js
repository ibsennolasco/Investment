$(document).ready(function() {

    var fixedHeader = $('#desktop-menu-fixed');

    $(window).on('scroll', function() {

        var proyectosOffTop = $('#about').offset().top;

        if ($(window).scrollTop() >= proyectosOffTop) {

            fixedHeader.css('margin-top', 0);

        } else if ($(window).scrollTop() <= proyectosOffTop / 2) {

            fixedHeader.css('margin-top', '-68px')

        }


    })
});