var options = {
    slideSelector: ".slides__slide",
    defaultBGColor: 'rgba(143,100,142,1)'
};
//uses GSAP to animate bg colour
jQuery(function() {
    jQuery.scrollify({
        section : options.slideSelector,
        before:function(slideIndex, slides) {           
        
            var c = jQuery('.slides__slide:eq('+(slideIndex -1)+')');
            var n = jQuery('.slides__slide:eq('+slideIndex+')');
            
            TweenMax.to(jQuery('.slides__slide'), 5, {backgroundColor: n.attr('data-bg-color')});
            
        }
    });
});