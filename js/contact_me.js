$(function () {

  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var $contactForm = $('#contactForm');
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var $success = $('#success');
      $.ajax({
        type: "POST",
        url: "//docs.google.com/forms/d/e/1FAIpQLSdpg5lzboiuxs-82Zm53f_45g2sbgQZBOIpGwNGoF3VR5pr1Q/formResponse",
        dataType: "json",
        data: {
          'entry.1398314030': name,
          'entry.1922591094': email,
          'entry.1658098952': phone,
          'entry.2115776476': message
        },
        cache: false,
        success: function () {
          // Success message
          $success.html("<div class='alert alert-success'>");
          $success.find('> .alert-success')
              .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>")
              .append("<strong>Your message has been sent. </strong>")
              .append('</div>');

          //clear all fields
          $contactForm.trigger("reset");
        },
        error: function () {
          // Success message
          $success.html("<div class='alert alert-success'>");
          $success.find('> .alert-success')
              .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>")
              .append("<strong>Your message has been sent. </strong>")
              .append('</div>');

          //clear all fields
          $contactForm.trigger("reset");
        }
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});
