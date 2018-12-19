/*jslint browser: true*/
/*global $, jQuery*/
$(document).on('click','.scroll-link', function(event) {
    var anchor = $(this).attr('href');
    $('body, html').animate({
      scrollTop: ($(anchor).offset().top)
    }, 800);
    return false
});