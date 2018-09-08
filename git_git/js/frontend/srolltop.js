$(document).ready(function () {
    let scrollTop = $('.js-scrolltop');

    scrollTop.on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
