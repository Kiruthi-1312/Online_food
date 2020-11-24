$(document).ready(function() {
	$('.js-feature').waypoint(function(direction) {
		if(direction == "down") {
           $('nav').addClass('sticky');
		} else{
           $('nav').removeClass('sticky');
		}
	});

    $('.js-scroll-to-plan').click(function()
    {
    	$('html,body').animate({scrollTop: $('.js-plans').offset().top},1000);
    });

    $('.js-scroll-to-start').click(function()
    {
    	$('html,body').animate({scrollTop: $('.js-feature').offset().top},1000);
    });

    $('.js-nav').click(function()
    {
    	var nav = $('.js-main-nav');

    	nav.slideToggle(200);
    });

});