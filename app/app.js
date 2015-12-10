/* GALLERY */
$(document).ready(function(){
	$('.slide').slideUp();

	$('.gallery-button').click(function() {
		$('.slide').slideToggle();

		$('html, body').animate({
        	'scrollTop': $('.slide').eq(0).offset().top
    	}, 300);
	});




/* MENU STICKY */
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




/* SMOOTH SCROLLING */
	 $('a[href*=#]:not([href=#])').click(function(){
	    $('html, body').animate({
	        'scrollTop': $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    //return false;
	});



/* SCROLL TOP BUTTON */
	
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}

	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});


});






















