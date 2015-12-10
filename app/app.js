$(document).ready(function(){
	$('.slide').slideUp();

	$('.gallery-button').click(function() {
		$('.slide').slideToggle();

		$('html, body').animate({
        	'scrollTop': $('.slide').eq(0).offset().top
    	}, 300);
	});

	var navBarTop = $('#nav').offset().top;

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > navBarTop - 10) {
			$('#nav').addClass('fixed');
		} else {
			$('#nav').removeClass('fixed');
		}

		if ($(window).scrollTop() > navBarTop) {
			$('#nav').addClass('fixed-change');
		} else {
			$('#nav').removeClass('fixed-change');
		}
  });
});