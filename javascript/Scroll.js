$(document).ready(function () {

  // Mostrar y ocultar botón "Volver arriba"

  var btnTop = $('#btnTop');

  $(window).on('scroll', function () {

    var proyectosOffsetTop = $('#about').offset().top;

    if ($(window).scrollTop() >= proyectosOffsetTop) {

      btnTop.css('margin-right', 0);

    }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {

      btnTop.css('margin-right', '-150px');

    }

  })

  // Movimiento suave de scroll de "Inicio" y "Volver arriba"

  $('a.Top').on('click', function (e) {
    e.preventDefault();

    if ($(window).scrollTop() != 0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
    }

  })

  // Movimiento suave de scroll de los demás items del menú principal
  $('a.top-btm-scroll').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top 
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.services-scroll').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 39
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.teams-scroll').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 68
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.pricing-scroll').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 68
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });


});