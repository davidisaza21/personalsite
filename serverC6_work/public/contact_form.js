$(function() {
    // Set up an event listener for the contact form.
  $('#ajax-contact').submit(function(event) {
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
  $(".exit-button").click(function(){
    $("#header").load(location.href + " #header");
  });
});