/*jslint browser: true*/
/*global $, jQuery*/
$(function () {
  $.scrollify({
      section : ".panel",
    interstitialSection : ".footer",
      easing: "easeOutExpo",
      scrollSpeed: 800,
      offset : 0,
      scrollbars: true,
      standardScrollElements: "",
      before:function() {},
      after:function() {},
      afterResize:function() {},
      afterRender:function() {}
    });
});
$(document).on('click','.scroll-link', function(event) {
    var anchor = $(this).attr('href');
    $('body, html').animate({
      scrollTop: ($(anchor).offset().top)
    }, 800);
    return false
});