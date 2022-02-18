(function ($) {
  $(document).ready(function () {
    //form validation
    if ($("#lead_form").length) {
      $("#lead_form").validate({
        errorElement: "span", //default input error message container
        errorClass: "help-block help-block-error", // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: ".ignore", // validate all fields including form hidden input
        rules: {
          name: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          phone: {
            required: true,
            digits: true,
          },
        },
        messages: {
          name: {
            required: "Your name required!",
          },
          email: {
            required: "Your email required!",
            email: "Invalid email!",
          },
          phone: {
            required: "Your phone number required!",
            digits: "Invalid phone number!",
          },
        },
        highlight: function (element) {
          // hightlight error inputs
          $(element).closest("fieldset").addClass("has-error"); // set error class to the control group
        },

        unhighlight: function (element) {
          // revert the change done by hightlight
          $(element).closest("fieldset").removeClass("has-error"); // set error class to the control group
        },

        success: function (label) {
          label.closest("fieldset").removeClass("has-error"); // set success class to the control group
        },
        submitHandler: function (form) {
          var btn = $(form).find("button");
          btn.prop("disabled", true);
          $.ajax({
            url: jQuery(form).attr("action"),
            type: "POST",
            data: $(form).serializeArray(),
            dataType: "json",
            success: function (data) {
              btn.prop("disabled", false);
              $("#feedback")
                .removeClass("error")
                .addClass("success")
                .text("Form submit success!")
                .show();
              $(form)[0].reset();
            },
            error: function (data) {
              btn.prop("disabled", false);
              $("#feedback")
                .removeClass("success")
                .addClass("error")
                .text("Error! please try again.")
                .show();
            },
          });
        },
      });
    }
  }); //DOM ready
})(jQuery);
