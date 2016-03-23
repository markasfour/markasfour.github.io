$(".slider").slick({
	dots: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 8000,
	infinite: true,
	speed: 500,
	slide: 'div',
	cssEase: 'linear',
	responsive: [{
		breakpoint: 800,
		settings: {
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 8000,
			infinite: true,
			speed: 500,
			slide: 'div',
			cssEase: 'linear'
		}
	}]
});	
