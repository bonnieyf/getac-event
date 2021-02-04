// slider settings

// gallery-slider M04_Gallery GTC-10
$('.gallery-slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipe: true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                arrows: false
            }
        }
    ]
});

// M07_Content-Tiles GTC-15 slider for mobile only
// i) Slick needs no get Reinitialized on window Resize after it was destroyed
$(window).on('load resize orientationchange', function() {
    $('.content-tiles-slider').each(function(){
        var $carousel = $(this);
        // Initializes a slick carousel only on mobile screens
        // slick on mobile
        if ($(window).width() > 1023) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else {
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    arrows: false,
                    dots: true,
                    autoplay: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true
                });
            }
        }
    });
});

