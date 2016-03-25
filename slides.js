$(".slider-projects").slick({
	centerMode: true,
	centerPadding: '60px',
	variableWidth: true,
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
			centerMode: false,
			dots: true,
			variableWidth: true,
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

$(".slider-skills").slick({
	centerMode: true,
	centerPadding: '10px',
	variableWidth: true,
	slidesToShow: 5,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 0,
	infinite: true,
	speed: 4000,
	slide: 'div',
	cssEase: 'linear',
	pauseOnHover: false,
	responsive: [{
		breakpoint: 800,
		settings: {
			centerMode: false,
			dots: false,
			variableWidth: true,
			slidesToShow: 5,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 0,
			infinite: true,
			speed: 4000,
			slide: 'div',
			cssEase: 'linear',
			pauseOnHover: false
		}
	}]
});
