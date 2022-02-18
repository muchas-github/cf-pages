! function (a) {
    a(document).ready(function () {
        a("#lead_form").length && a("#lead_form").validate({
            errorElement: "span",
            errorClass: "help-block help-block-error",
            focusInvalid: !1,
            ignore: ".ignore",
            rules: {
                name: {
                    required: !0
                },
                email: {
                    required: !0,
                    email: !0
                },
                phone: {
                    required: !0,
                    digits: !0
                }
            },
            messages: {
                name: {
                    required: "Your name required!"
                },
                email: {
                    required: "Your email required!",
                    email: "Invalid email!"
                },
                phone: {
                    required: "Your phone number required!",
                    digits: "Invalid phone number!"
                }
            },
            highlight: function (e) {
                a(e).closest("fieldset").addClass("has-error")
            },
            unhighlight: function (e) {
                a(e).closest("fieldset").removeClass("has-error")
            },
            success: function (e) {
                e.closest("fieldset").removeClass("has-error")
            },
            submitHandler: function (r) {
                var s = a(r).find("button");
                s.prop("disabled", !0), a.ajax({
                    url: jQuery(r).attr("action"),
                    type: "POST",
                    data: a(r).serializeArray(),
                    dataType: "json",
                    success: function (e) {
                        s.prop("disabled", !1), a("#feedback").removeClass("error").addClass("success").text("Form submit success!").show(), a(r)[0].reset()
                    },
                    error: function (e) {
                        s.prop("disabled", !1), a("#feedback").removeClass("success").addClass("error").text("Error! please try again.").show()
                    }
                })
            }
        })
    })
}(jQuery);