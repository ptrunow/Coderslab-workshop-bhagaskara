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


/* SCROLL DOWN BUTTON */




/* REVIEVS */
	$(window).on('scroll', doParallax);

		
		$('.dots-nav a').on('click', function() {
			$('.dots-nav a').removeClass('active');
			$(this).addClass('active');
			var id = $(this).attr('data-slide');
			slideChange(id);
			return false;
		});

		function slideChange(id) {
			$('.review-item').fadeOut(300);
			$('.review-item#' + id).fadeIn(300);
		}



/* PARALLAX */
	var images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));
	function getViewportHeight() {
	    var a = document.documentElement.clientHeight, b = window.innerHeight;
	    return a < b ? b : a;
	}
	    function getViewportScroll() {
	    if(typeof window.scrollY != 'undefined') {
	        return window.scrollY;
	    }
	    if(typeof pageYOffset != 'undefined') {
	        return pageYOffset;
	    }
	    var doc = document.documentElement;
	    doc = doc.clientHeight ? doc : document.body;
	    return doc.scrollTop;
		}

		function doParallax() {
	    var el, elOffset, elHeight,
	        offset = getViewportScroll(),
	        vHeight = getViewportHeight();
	 
	    for(var i in images) {
	        el = images[i];
	        elOffset = el.offsetTop;
	        elHeight = el.offsetHeight;
	 
	        if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }
	 
	        el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
	    }
}



});



















