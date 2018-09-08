let skrollr = require('skrollr');

$(document).ready(function () {
    let search = $('.js-search');
    let close = $('.js-search-close');

    search.on('click', function () {
        let $this = $(this);
        let parent = $this.closest('.container');
        let menu = parent.find('.b-header__main-menu');
        let form = parent.find('.b-form');
        let input = form.find('input');

        setTimeout(() => {
            form.show();
            input.focus();
        }, 400);
        menu.addClass('hidden');
        $this.addClass('move');
        close.addClass('active');

    });

    close.on('click', function () {
        let $this = $(this);
        let parent = $this.closest('.container');
        let menu = parent.find('.b-header__main-menu');
        let form = parent.find('.b-form');
        let search = parent.find('.js-search');

        search.removeClass('move');
        setTimeout(() => {
            menu.removeClass('hidden');
        }, 300);

        $this.removeClass('active');
        form.hide();
    });

if( ($(window).innerWidth()) <= 1025) {
    skrollr.init().destroy();
} else {
    $(document).ready(function () {
        skrollr.init({
            smoothScrolling: false,
        });
    });
}
});
