(function ($) {
    "use strict";

    // background image attribute
    $('[data-background]').each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // testimonial swiper 
    var swiper = new Swiper(".tp-testimonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-test-button-next",
            prevEl: ".tp-swiper-test-button-prev",
        },
    });

    // Brand Slider Animation 
    var swiper = new Swiper(".tp-brand-top-active", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true
        },
    });
    var swiper = new Swiper(".tp-brand-bottom-active", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true
        },
    });

    // team slider 
    var swiper = new Swiper(".tp-team-active", {
        slidesPerView: 4,
        breakpoints: {
            // when window width is >= 992px
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-team-slider-button-next",
            prevEl: ".tp-team-slider-button-prev",
        },
    });
})(jQuery)