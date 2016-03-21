$(function() {

  /*
  	Counter Test
   */
  var err, error, i, stMenu;
  i = 0;
  $('a.big-button').click(function() {
    i++;
    document.getElementById('counter').innerHTML = i;
  });

  /*
  	SVG Fallback
   */
  if (!Modernizr.svg) {
    $('img[src*=\'svg\']').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }

  /*
  	Menu Icon
   */
  stMenu = $('.st-menu');
  stMenu.click(function() {
    stMenu.toggleClass('active');
    $('.main-menu-xs').toggleClass('active');
  });

  /*
  	Owl Carousel
   */
  $('.about-slider').owlCarousel({
    loop: true,
    items: 1,
    itemClass: 'item'
  });

  /*
  	E-mail Ajax Send
  	Documentation & Example: https://github.com/agragregra/uniMail
   */
  $('form').submit(function() {

    /*
    		Change
     */
    var th;
    th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function() {
      alert('Thank you!');
      setTimeout((function() {

        /*
        				Done Functions
         */
        th.trigger('reset');
      }), 1000);
    });
    return false;
  });

  /*
  	Chrome Smooth Scroll
   */
  try {
    $.browserSelector();
    if ($('html').hasClass('chrome')) {
      $.smoothScroll();
    }
  } catch (error) {
    err = error;
  }
  $('img, a').on('dragstart', function(event) {
    event.preventDefault();
  });
});
