var mySwiperGalleryDesktop = new Swiper('.js-gallery-slider-desktop', {
    spaceBetween: 28,
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    autoplay: {
        delay: 4900,
    },

});
var mySwiperGalleryMobile = new Swiper('.js-gallery-slider-mobile', {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4900,
    },
});

var mySwiperProduct = new Swiper('.js-product-slider', {
    spaceBetween: 0,
    slidesPerView: 2,
    scrollbar: {
        el: '.js-product-slider-scrollbar',
        draggable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        840: {
            slidesPerView: 4,
        }
    }
});

var mySwiperProductTitle = new Swiper('.js-product-title-slider', {
    spaceBetween: 0,
    slidesPerView: 2,
    freeMode: true,
    scrollbar: {
        el: '.js-product-title-slider-scrollbar',
        draggable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        840: {
            slidesPerView: 2.5,
        }
    }
})

