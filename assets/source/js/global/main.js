(function($){
  
    $(document).ready(function(){

       
        $('.lazy').Lazy({
            'bind':"event"
        });
       
        //menu triggering
        $('.site-header__mobmenu-icon, .site-header__mobmenu-close-icon').click(function(){
            $('body').toggleClass('active-menu');
        });
        //sub menu
        $('.site-header__menu-item--has-submenu > a').click(function(e){
            e.preventDefault();
            var liItem = $(this).parents('li');
            $(this).siblings('.site-header__submenu-holder').slideToggle(function(){
                liItem.toggleClass('active');
            });
        });

       

    }); //DOM ready

  
})(jQuery);