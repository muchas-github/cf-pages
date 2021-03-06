(function($){
  
    $(document).ready(function(){

       
        //testimonials slider
        if($('.testimonials').length){
            $('.testimonials').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay:false,
                dots:false,
                arrows:true,
                adaptiveHeight:true,
                prevArrow : '<button class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="43.429" height="17.062" viewBox="0 0 43.429 17.062"><path d="M-155.774,230.968h-39.6l6.117-6.117-1.414-1.414-8.531,8.531h0l8.531,8.531,1.414-1.414-6.117-6.117h39.6Z" transform="translate(199.203 -223.437)"/></svg></button>',
                nextArrow : '<button class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="43.429" height="17.062" viewBox="0 0 43.429 17.062"><path d="M-155.774,230.968h-39.6l6.117-6.117-1.414-1.414-8.531,8.531h0l8.531,8.531,1.414-1.414-6.117-6.117h39.6Z" transform="translate(-155.774 240.499) rotate(180)"/></svg></button>',
                responsive:[
                    {
                        breakpoint: 992,
                        settings:{
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings:{
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }


    }); //DOM ready

  
})(jQuery);