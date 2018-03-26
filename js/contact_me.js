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
      var empresa = $("input#empresa").val();
      var $success = $('#success');
      var data = {
        'entry.1398314030': name,
        'entry.1922591094': email,
        'entry.1656166482': empresa,
        'entry.1761345160': $("input#asisto").is(":checked") ? 'Asisto' : 'Solo quiero info'
      };
      if ($("input#tos").val() === "on")
        data['entry.719448328'] = 'Acepto';
      $.ajax({
        type: "POST",
        url: "//docs.google.com/forms/d/e/1FAIpQLSdpg5lzboiuxs-82Zm53f_45g2sbgQZBOIpGwNGoF3VR5pr1Q/formResponse",
        dataType: "json",
        data: data,
        cache: false,
        success: function () {
          // Success message
          $success.html("<div class='alert alert-success'>");
          $success.find('> .alert-success')
              .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
              .append("</button>")
              .append("<strong>Hemos recibido tu inscripción. ¡Muchas gracias, nos vemos pronto! </strong>")
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
              .append("<strong>Hemos recibido tu inscripción. ¡Muchas gracias, nos vemos pronto! </strong>")
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
