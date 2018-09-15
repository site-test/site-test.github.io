let magnificPopup = require('magnific-popup');
import slick from 'slick-carousel';

$(document).ready(function () {
    let windowWidth = $(window).innerWidth()/2;
    const posTriangle = 42;
    let loginBtn = $('.js-login');
    let loginBlock = $('.b-login');

    let widthLoginBlock = loginBlock.innerWidth();
    let heightLoginBlock = loginBlock.innerHeight();

    loginBtn.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let heightBtn = $this.innerHeight();
        let centerPos = posTriangle - heightBtn / 2;
        let top = $this.offset().top - heightLoginBlock + heightBtn + centerPos;
        let left = $this.offset().left;

        loginBlock.removeClass('arrow-left');
        if (left > windowWidth) {
            left = left - widthLoginBlock - 10;
        } else {
            loginBlock.addClass('arrow-left');
            left += 34
        }

        loginBlock.addClass('active');
        loginBlock.css({'top': `${top}px`, 'left': `${left}px`});
    });

    $(document).click(function(event) {
        if ($(event.target).closest('.js-login').length ) return;
        if ($(event.target).closest('.b-login').length ) return;

        loginBlock.removeClass('active');
    });

    let popupSlider = $('.js-popup-slider');
    let paramPopupSlider = {
        slidesToShow  : 1,
        slidesToScroll: 1,
        fade          : true,
        arrows        : true
    };

    $('.js-popup').magnificPopup({
        fixedContentPos: true,
        preloader: false,
        mainClass: 'custom-mfp',
        callbacks: {
            open: function() {
                $(popupSlider).slick(paramPopupSlider);
            },
            beforeClose: function() {
            }
        }
    });

    $('.js-popup-youtube').magnificPopup({
        type: 'iframe'
    });

    $('.js-zoom-img').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom b-product-gallery__popup', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        },
    });

});
