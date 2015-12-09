$(document).ready(function(){
	$('.slide').slideUp();

	$('.gallery-button').click(function() {
		$('.slide').slideToggle();

		$('html, body').animate({
        	'scrollTop': $('.slide').eq(0).offset().top
    	}, 300);
	});


	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 1080) {
			$('#nav').addClass('fixed');
		} else {
			$('#nav').removeClass('fixed');
		}
  });
});
