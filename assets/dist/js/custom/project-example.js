$.fn.BeerSlider=function(e){return e=e||{},this.each(function(){new BeerSlider(this,e)})},$(".beer-slider").BeerSlider({start:25}),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),$("a[data-slide]").click(function(e){e.preventDefault();e=$(this).data("slide");$(".slider-nav").slick("slickGoTo",e-1)}),$(".slider-nav").slick({infinite:!0,speed:300,slidesToShow:3.99,slidesToScroll:1,asNavFor:".slider-for",responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}}]});