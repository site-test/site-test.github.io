$(document).ready(function () {
   let mobileMenu =  $('.js-mobile-menu');
   let closeMobileMenu =  $('.js-close-mobile-menu');
   let mobileSubMenu =  $('.js-mobile-submenu');

    mobileMenu.on('click', function () {
       let $this = $(this);
        $this.prev().addClass('active');
        $('body').css('overflow', 'hidden')
    });
    closeMobileMenu.on('click', function () {
        let $this = $(this);
        $this.parent().removeClass('active');
        $('body').css('overflow', 'visible')
    });

    mobileSubMenu.on('click', function () {
        let $this = $(this);
        $this.toggleClass('arrow');
        $this.next().toggleClass('active');
    });

    $(document).click(function(event) {
        if ($(event.target).closest('.b-header__mobile-menu').length ) return;
        if ($(event.target).closest('.js-mobile-menu').length ) return;
        if ($(event.target).closest('.js-mobile-submenu').length ) return;

        $('.b-header__mobile-menu').removeClass('active');
        $('.mobile-sub-menu__dropdown').removeClass('active');
        mobileSubMenu.removeClass('arrow');
    });
});
