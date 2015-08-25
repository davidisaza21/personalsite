$(function() {

  $('a').click(function(evt) {

    console.log('link clicked');

    evt.preventDefault();

      $.get('http://finance.yahoo.com/q?s=aapl', function() {

        console.log(arguments);

      });

  });

});

