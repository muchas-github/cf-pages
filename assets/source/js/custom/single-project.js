jQuery(document).ready(function($){
  // beerslider
$.fn.BeerSlider = function ( options ) {
  options = options || {};
  return this.each(function() {
  new BeerSlider(this, options);
  });
  };
  $('.beer-slider').BeerSlider({start: 25});

  // Slick slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  /*
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
*/
  $('.slider-nav').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    prevArrow: '<button class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9.363" height="16.414" viewBox="0 0 9.363 16.414"><path id="Small_Arrow" data-name="Small Arrow" d="M-386.043,157.847l-7.5-7.5,7.5-7.5.449.449-7.051,7.051,7.051,7.051Z" transform="translate(394.251 -142.14)" fill="#899495" stroke="#899495" stroke-width="1"/></svg></button>',
    nextArrow : '<button class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9.363" height="16.414" viewBox="0 0 9.363 16.414"><path id="Small_Arrow" data-name="Small Arrow" d="M-393.094,157.847l7.5-7.5-7.5-7.5-.449.449,7.051,7.051-7.051,7.051Z" transform="translate(394.251 -142.14)" fill="#899495" stroke="#899495" stroke-width="1"/></svg></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

});

