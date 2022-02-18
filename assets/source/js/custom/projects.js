jQuery(document).ready(function ($) {
  // slick slider
  $(".project-slider__data").slick({
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="43.429" height="17.062" viewBox="0 0 43.429 17.062"><path d="M-155.774,230.968h-39.6l6.117-6.117-1.414-1.414-8.531,8.531h0l8.531,8.531,1.414-1.414-6.117-6.117h39.6Z" transform="translate(199.203 -223.437)"/></svg></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="43.429" height="17.062" viewBox="0 0 43.429 17.062"><path d="M-155.774,230.968h-39.6l6.117-6.117-1.414-1.414-8.531,8.531h0l8.531,8.531,1.414-1.414-6.117-6.117h39.6Z" transform="translate(-155.774 240.499) rotate(180)"/></svg></button>',
  });

  // filter show or hide showfilter
  $("#showfilters").on("click", function (e) {
    $(".filter-projects__content").slideToggle();
  });

  // checkbox
  var filters = {
      services: [],
      categories: [],
    },
    active_filters = "";

  // clear filter
  $("#clearFilter").on("click", function (e) {
    filters.services.splice(0, filters.services.length);
    filters.categories.splice(0, filters.categories.length);
    active_filters = "No filter selected!";
    $("#filter-text").text(active_filters);
    $('.filter-projects__content__list input[type="checkbox"]').prop(
      "checked",
      false
    );
  });

  // filter button style
  $("#showfilters").on("click", function (e) {
    $("#showfilters").toggleClass("filter-projects__filter2");
  });

  $('.filter-projects__content__list input[type="checkbox"]').change(
    function () {
      var type = $(this).attr("data-type"),
        action_type = $(this).prop("checked"),
        id = $(this).attr("id"),
        label = $("[for=" + id + "]");

      if (action_type) {
        filters[type].push(label.text());
      } else if (!action_type) {
        var i = filters[type].indexOf(label.text());
        if (i !== -1) {
          filters[type].splice(i, 1);
        }
      }
      active_filters = "";
      if (
        filters["categories"].length == 0 &&
        filters["services"].length == 0
      ) {
        active_filters = "No filter selected!";
        $("#filter-text").text(active_filters);
      }

      if (filters["categories"].length) {
        active_filters = filters["categories"].join(", ");
      }
      if (filters["services"].length) {
        if (active_filters !== "") {
          active_filters += ", ";
        }
        active_filters += filters["services"].join(", ");
      }
      $("#filter-text").text(active_filters);
    }
  );

  // accordion
  $(".filter-projects__content__list__header i").click(function () {
    $(this).toggleClass("icon-plus icon-minus"),
      $(this)
        .closest(".filter-projects__content__list__header")
        .next("ul.list")
        .toggle("active");
  });

  // load more
  $(".showLoadedGrid").slice(0, 1).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".showLoadedGrid:hidden").slice(0, 1).slideDown();
    if ($(".showLoadedGrid:hidden").length == 0) {
      $("#loadMore").text("No More Content").addClass("noContent");
    }
  });
});
