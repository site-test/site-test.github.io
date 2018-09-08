let magnificPopup = require('magnific-popup');

$(document).ready(function () {
    $('.js-gallery-single').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    $('.js-gallery').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});
