require('inputmask/dist/inputmask/inputmask.numeric.extensions');
let Inputmask = require('inputmask/dist/inputmask/inputmask.date.extensions');
let magnificPopup = require('magnific-popup');

$(document).ready(function() {
    $('.b-form').on('submit', function(event) {

        event = event || window.event;

        if (event.preventDefault) {
            // Вариант стандарта W3C:
            event.preventDefault()
        } else {
            // Вариант Internet Explorer:
            event.returnValue = false
        }

        const instance = $.magnificPopup.instance;

        instance.open({
            items: {
                src:  '#popup-success',
                type: 'inline'
            }
        });

    });

    let mask = $('.phone-mask');

    var im = new Inputmask("+7-999-999-99-99", {
        showMaskOnHover: false
    });
    im.mask(mask);
});
