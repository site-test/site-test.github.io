import slick from 'slick-carousel';

// let leadersSlider = $('.js-slider-leaders');
// let articleSlider = $('.js-article-slider');
// let articleSliderNav = $('.js-article-slider-nav');
//
// let partnersSlider = $('.js-partners-slider');
// let promoSlider = $('.js-slider-promo');
//
// let paramPromoSlider = {
//     dots          : true,
//     infinite      : false,
//     slidesToShow  : 1,
//     slidesToScroll: 1,
//     speed         : 350,
//     arrows        : false,
//     autoplay      : true,
//     autoplaySpeed : 2500
// };
// let paramPartnersSlider = {
//     dots          : true,
//     infinite      : false,
//     slidesToShow  : 5,
//     slidesToScroll: 5,
//     speed         : 300,
//     arrows        : false,
//     responsive    : [
//         {
//             breakpoint: 1100,
//             settings  : {
//                 slidesToShow  : 4,
//                 slidesToScroll: 4
//             }
//         },
//         {
//             breakpoint: 1023,
//             settings  : {
//                 slidesToShow  : 5,
//                 slidesToScroll: 5
//             }
//         },
//         {
//             breakpoint: 800,
//             settings  : {
//                 slidesToShow  : 4,
//                 slidesToScroll: 4
//             }
//         },
//         {
//             breakpoint: 650,
//             settings  : {
//                 slidesToShow  : 3,
//                 slidesToScroll: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings  : {
//                 slidesToShow  : 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// };
// let paramLeadersSlider = {
//     dots          : false,
//     infinite      : false,
//     slidesToShow  : 3,
//     slidesToScroll: 1,
//     speed         : 300,
//     arrows        : true,
//     appendArrows  : $('.js-arrow-container'),
//     prevArrow     : $('.js-arrow-prev'),
//     nextArrow     : $('.js-arrow-next'),
//     responsive    : [
//         {
//             breakpoint: 1023,
//             settings  : {
//                 slidesToShow  : 3,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 768,
//             settings  : {
//                 slidesToShow  : 2.5,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 650,
//             settings  : {
//                 slidesToShow  : 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 541,
//             settings  : {
//                 slidesToShow  : 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// };
//
//
// let paramArticleSlider = {
//     slidesToShow  : 1,
//     slidesToScroll: 1,
//     arrows        : false,
//     fade          : true,
//     asNavFor      : '.js-article-slider-nav'
// };
//
// let paramArticleSliderNav = {
//     slidesToShow  : 4,
//     slidesToScroll: 1,
//     asNavFor      : '.js-article-slider',
//     dots          : false,
//     focusOnSelect : true,
//     arrows        : true,
//     appendArrows  : $('.b-article__arrow .js-arrow-container'),
//     prevArrow     : $('.b-article__arrow .js-arrow-prev'),
//     nextArrow     : $('.b-article__arrow .js-arrow-next')
// };


let fullPageSlider = $('.js-fullpage-slider');
let stepCompanySlider = $('.js-step-company');
let newsSlider = $('.js-slider-news');
let selectCategorySlider = $('.js-select-category-slider');
let cardSlider = $('.js-card-slider');
let cardSliderV2 = $('.js-card-slider-v2');
let educationSlider = $('.js-education-slider');
let certificatesSlider = $('.js-certificates-slider');

let clinicSlider = $('.js-clinic-slider');
let clinicSliderNav = $('.js-clinic-slider-nav');

///let newsSlider = $('.js-news-slider');
// let sectionSlider = $('.js-section-slider');
// let sectionMobileSlider = $('.js-section-slider-mobile');
// let sectionMiniSlider = $('.js-section-slider--mini');
// let typographySlider = $('.js-slider-typography');

let paramClinicSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.js-clinic-slider-nav',
    arrows: true
};

let paramClinicSliderNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-clinic-slider',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    arrows: false
};

let paramEducationSlider = {
    slidesToShow  : 4,
    slidesToScroll: 1,
    speed         : 300,
    arrows        : true,
    responsive    : [
        {
            breakpoint: 1190,
            settings  : {
                slidesToShow  : 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 540,
            settings  : {
                slidesToShow  : 1,
                slidesToScroll: 1,
            }
        }
    ]
};

let paramCertificatesSlider = {
    slidesToShow  : 6,
    slidesToScroll: 6,
    speed         : 300,
    arrows        : false,
    dots          : true,
    responsive    : [
        {
            breakpoint: 1190,
            settings  : {
                slidesToShow  : 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 540,
            settings  : {
                slidesToShow  : 2,
                slidesToScroll: 2,
            }
        }
    ]
};

let paramFullPageSlider = {
    dots         : true,
    infinite     : false,
    speed        : 450,
    slidesToShow : 1,
    fade         : true,
    cssEase      : 'ease',
    arrows       : false,
    autoplay     : true,
    autoplaySpeed: 10000
};

let paramStepCompanySlider = {
    dots          : true,
    arrows        : false,
    infinite      : true,
    speed         : 450,
    slidesToShow  : 6,
    slidesToScroll: 6,
    responsive    : [
        {
            breakpoint: 1190,
            settings  : {
                slidesToShow  : 5,
                slidesToScroll: 1,
                variableWidth : true,
                swipeToSlide  : true,
                infinite      : false
            }
        },
        {
            breakpoint: 770,
            settings  : {
                slidesToShow  : 4,
                slidesToScroll: 1,
                variableWidth : true,
                swipeToSlide  : true,
                infinite      : false
            }
        },
        {
            breakpoint: 640,
            settings  : {
                slidesToShow  : 3,
                slidesToScroll: 1,
                variableWidth : true,
                swipeToSlide  : true,
                infinite      : false
            }
        },
        {
            breakpoint: 500,
            settings  : {
                slidesToShow  : 2,
                slidesToScroll: 1,
                variableWidth : true,
                swipeToSlide  : true,
                infinite      : false
            }
        },
        {
            breakpoint: 360,
            settings  : {
                slidesToShow  : 1,
                slidesToScroll: 1,
                variableWidth : true,
                swipeToSlide  : true,
                infinite      : false
            }
        }
    ]
};

let paramNewsSlider = {
    dots          : false,
    infinite      : true,
    slidesToShow  : 3,
    slidesToScroll: 1,
    speed         : 300,
    arrows        : true,
    responsive    : [
        {
            breakpoint: 1190,
            settings  : {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 714,
            settings  : {
                slidesToShow: 1
            }
        }
    ]
};

let paramSelectCategorySlider = {
    slidesToShow  : 1,
    slidesToScroll: 1,
    infinite      : true,
    speed         : 450,
    dots          : false,
    arrows        : true
}

let paramCardSlider = {
    dots          : false,
    infinite      : true,
    speed         : 450,
    slidesToShow  : 1,
    slidesToScroll: 1,
    fade          : true,
    cssEase       : 'ease'
}

let paramCardSliderV2 = {
    dots          : false,
    infinite      : true,
    speed         : 450,
    slidesToShow  : 1,
    slidesToScroll: 1,
    fade          : true,
    cssEase       : 'ease',
    responsive    : [
        {
            breakpoint: 1000,
            settings  : {
                slidesToShow  : 2,
                slidesToScroll: 2,
                fade          : false
            }
        },
        {
            breakpoint: 640,
            settings  : {
                slidesToShow  : 1,
                slidesToScroll: 1,
                fade          : true
            }
        }
    ]
}


let paramSectionMiniSlider = {
    dots         : false,
    infinite     : true,
    speed        : 450,
    slidesToShow : 6,
    appendArrows : $('.section__arrow'),
    prevArrow    : $('.section__arrow--mini .js-arrow-prev'),
    nextArrow    : $('.section__arrow--mini .js-arrow-next'),
    variableWidth: true,
    swipeToSlide : true,
    responsive   : [
        {
            breakpoint: 1025,
            settings  : {
                slidesToShow  : 4,
                slidesToScroll: 1
            }
        }
    ]
};

let paramTypographySlider = {
    dots          : true,
    infinite      : false,
    slidesToShow  : 1,
    slidesToScroll: 1,
    speed         : 300,
    arrows        : true
};

$(document).ready(function() {
    $(fullPageSlider).slick(paramFullPageSlider);
    $(stepCompanySlider).slick(paramStepCompanySlider);
    $(newsSlider).slick(paramNewsSlider);
    $(cardSlider).slick(paramCardSlider);
    $(cardSliderV2).slick(paramCardSliderV2);
    $(educationSlider).slick(paramEducationSlider);
    $(certificatesSlider).slick(paramCertificatesSlider);

    $(clinicSlider).slick(paramClinicSlider);
    $(clinicSliderNav).slick(paramClinicSliderNav);

    if ($(window).innerWidth() < 712) {
        $(selectCategorySlider).slick(paramSelectCategorySlider);
    }

    $(window).resize(function() {
        if ($(window).innerWidth() < 712) {
            $(selectCategorySlider).slick(paramSelectCategorySlider);
        }
    })


    // newsSlider.slick(paramNewsSlider);
    // sectionSlider.slick(paramSectionSlider);
    // sectionMobileSlider.slick(paramSectionMobileSlider);
    // sectionMiniSlider.slick(paramSectionMiniSlider);
    // typographySlider.slick(paramTypographySlider);

    // partnersSlider.slick(paramPartnersSlider);
    // leadersSlider.slick(paramLeadersSlider);
    // articleSlider.slick(paramArticleSlider);
    // articleSliderNav.slick(paramArticleSliderNav);

    // promoSlider.slick(paramPromoSlider);
    //
    // newsSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     let $counterSlider = $(this).closest('.news-slider').find('.js-slider-count');
    //
    //     $counterSlider.html(nextSlide + 1);
    // });
    //
    // articleSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     let $counterSlider = $(this).closest('.b-article__slider').find('.b-article__slider-count span');
    //     $counterSlider.html(nextSlide + 1);
    // });
});
