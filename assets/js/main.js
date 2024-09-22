(function ($) {
    "use strict";
    var windowOn = $(window);
    // wow
    windowOn.on('load', function () {
        wowAnimation();
    });

    // background image attribute
    $('[data-background]').each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
    // background color attribute
    $('[data-bg-color]').each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })
    // color attribute 
    $('[data-color]').each(function () {
        $(this).css("color", $(this).attr("data-color"))
    })

    // about intro video Popup
    $('.popup-image').magnificPopup({
        type: 'image',
        // other options
    });

    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    // Offcanvas start ------------------------------------------------------------
    $(".tp-offcanvas-toggle").on('click', function () {
        $(".tp-offcanvas").addClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });
    $(".tp-offcanvas-close-toggle, .tp-offcanvas-overlay").on('click', function () {
        $(".tp-offcanvas").removeClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");

    });

    // Offcanvas end ------------------------------------------------------------

    // search bar start ------------------------------------------------------------
    $(".tp-search-toggle").on('click', function () {
        $(".tp-header-search-bar").addClass("tp-search-open");
        $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });
    $(".tp-search-close, .tp-offcanvas-overlay").on('click', function () {
        $(".tp-header-search-bar").removeClass("tp-search-open");
        $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");

    });

    // search bar end ------------------------------------------------------------

    // Mobile menu code start here -------------------------------------------------------
    var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
    var tpSideMenu = $('.tp-offcanvas-menu nav');
    tpSideMenu.append(tpMenuWrap);
    if ($(tpSideMenu).find('.sub-menu, .tp-mega-menu').length != 0) {
        $(tpSideMenu).find('.sub-menu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
        console.log(e);
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.sub-menu, .tp-mega-menu').slideDown();
        } else {
            $(this).siblings('.sub-menu, .tp-mega-menu').slideUp();
            $(this).parent().removeClass('active');
        }
    });

    // Mobile menu code end here -------------------------------------------------------

    // Sticky Header Js
    windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });
    // Sticky Header Js end

    // blog post swiper 
    var swiper = new Swiper(".tp-blog-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-blog-button-next",
            prevEl: ".tp-swiper-blog-button-prev",
        },
    });
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

    // testimonial-2 swiper
    var swiper = new Swiper(".tp-testimonial-img-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
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

    var swiper = new Swiper(".tp-testimonial-2-active", {
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
    // Testimonial 2 end---------------------------


    // Testimonial thumb start---------------------------
    var swiperThumbs = new Swiper(".tp-testimonial-thumbs-active", {
        spaceBetween: 30,
        slidesPerView: 3,
        centeredSlides: true,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".tp-swiper-test-button-next",
            prevEl: ".tp-swiper-test-button-prev",
        }
    });
    var swiperContent = new Swiper(".tp-testimonial-contents-active", {
        // spaceBetween: 10,
        navigation: {
            nextEl: ".tp-swiper-test-button-next",
            prevEl: ".tp-swiper-test-button-prev",
        },
        thumbs: {
            swiper: swiperThumbs
        },
    });
    // Testimonial thumb end---------------------------

    // Testimonial thumb home 5 start---------------------------
    var swiper = new Swiper(".tp-testi-active", {
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
                slidesPerView: 3,
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
            nextEl: ".tp-review-button-next",
            prevEl: ".tp-review-button-prev",
        },

    });
    // Testimonial thumb home 5 end---------------------------

    // Brand Slider Animation ------------------------
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
    var swiper = new Swiper(".tp-brand-titile-active", {
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

    // brand normal slider 
    var swiper = new Swiper(".tp-brand-normal-active", {
        slidesPerView: 5,
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
                slidesPerView: 5,
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

    //project slider
    var swiper = new Swiper(".tp-project-active", {
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

    // portfolio filter 
    if ($('.grid').length != 0) {
        $('.grid').imagesLoaded(function () {
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: 1
                }
            });
            // filter items on button click
            $('.tp-portfolio-filter').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });

            // for menu active class 
            $('.tp-portfolio-filter button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            })
        });
    }

    // wow
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    // jarallax
    if ($('.jarallax').length) {
        $('.jarallax').jarallax({
            speed: 0.2,
        });
    }

})(jQuery)