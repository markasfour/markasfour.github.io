$(".slider-projects").slick({
	centerMode: true,
	slidesToShow: 3,
	variableWidth: true,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 8000,
	infinite: true,
	/*responsive: [{
		breakpoint: 800,
		settings: {
			centerMode: false,
			slidesToShow: 1, 
			variableWidth: false,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 8000,
			infinite: true,
			speed: 500,
		}
	}]*/
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

$(".slider-skills-bot").slick({
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
	rtl: true,
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
			pauseOnHover: false,
			rtl: true,
		}
	}]
});
