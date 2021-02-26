$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      items: 4,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
      $('#slick_slider').slick({
        infinite: true,
        slideToShow:1,
        slideToScroll:1
    });
  });


$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1){
      $('header').addClass('scrolledHeader')
    }else{
      $('header').removeClass('scrolledHeader')
    }
  })
})