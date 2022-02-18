!(function (i) {
  i(document).ready(function () {
    i(".lazy").Lazy({ bind: "event" }),
      i(".site-header__mobmenu-icon, .site-header__mobmenu-close-icon").click(
        function () {
          i("body").toggleClass("active-menu");
        }
      ),
      i("#service-menu-btn, .service-menu-hide-btn").click(
        function () {
          i("body").toggleClass("active-sub-menu");
        }
      ),
      i(".site-header__menu-item--has-submenu > a").hover(function (e) {
        e.preventDefault();
        var n = i(this).parents("li");
        i(this)
          .siblings(".site-header__submenu-holder")
          .addClass(function () {
            n.addClass("active");
          });
      });
  });
})(jQuery);
