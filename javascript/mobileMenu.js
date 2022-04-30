$(document).ready(function () {

    var numero = 1;
  
    $('#menuBtn').on('click', function (e) {
  
      e.preventDefault();
      if (numero == 1) {
        $('.mobile-menu .main-menu').animate({left:0}, 300, function () {
          numero = 0;
        });
      } else {
        $('.mobile-menu .main-menu').animate({left:'-100%'}, 300, function () {
          numero = 1;
        })
      }
  
    })
  
    $('.mobile-menu .main-menu a').on('click', function () {
  
      $('.mobile-menu .main-menu').animate({left:'-100%'}, 300, function () {
        numero = 1;
      })
  
    })
  
  });
  