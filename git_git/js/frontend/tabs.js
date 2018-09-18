$(document).ready(function() {
    let linkTab = $('.js-tab > div'),
        contentTab = $('.js-tab-content > div'),
        elClosest = '.b-main';

    linkTab.on('click', function(e) {
        let $this = $(this),
            tabActive = $this.closest(elClosest).find('.js-tab');

        tabActive.find('div').removeClass('active');
        $this.addClass('active');
        let clickedTab = tabActive.find('.active');

        contentTab.removeClass('active');
        let clickedTabIndex = clickedTab.index();
        contentTab.eq(clickedTabIndex).addClass('active');
    });

    let linkTabPoll = $('.js-tab-poll > div'),
        contentTabPoll = $('.js-tab-content-poll > div'),
        elClosestPoll = '.b-poll';

    linkTabPoll.on('click', function(e) {
        let $this = $(this),
            tabActive = $this.closest(elClosestPoll).find('.js-tab-poll');

        tabActive.find('div').removeClass('active');
        $this.addClass('active');
        let clickedTab = tabActive.find('.active');

        contentTabPoll.removeClass('active');
        let clickedTabIndex = clickedTab.index();
        contentTabPoll.eq(clickedTabIndex).addClass('active');
    });

    $('.services__show').on('click', function() {
        let $this = $(this);
        let body = $this.closest('.services__item').find('.services__body');
        $this.toggleClass('services__show--hidden');
        body.slideToggle();
    });
});
