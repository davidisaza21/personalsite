$(function() {

  var form = $('#ajax-contact');

    // Get the messages div.
  var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
    // Stop the browser from submitting the form.
      event.preventDefault();
  });
  $("#contact-me").click(function(){
    $("#header").load("contact_form.html");
  });
  $("#linkback-cm").click(function(){
    $("#header").load("contact_form.html");
    $(document.body).scrollTop($('#header').offset().top);
  });
});

