$(".slider").slick({

    autoplay: true,
    dots: true,
    //customPaging : function(slider, i) {
    //    var thumb = $(slider.$slides[i]).data('thumb');
    //    return '<a><img src="'+thumb+'"></a>';
    //},
	
    responsive: [{ 
        breakpoint: 500,
        settings: {
            arrows: false,
            infinite: false,
        } 
    }]
});

