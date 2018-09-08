$(document).ready(function () {
    let linkTab = $(".js-tab > button"),
        contentTab = $(".js-tab-content > div"),
        elClosest = '.b-main';

    linkTab.on("click", function (e) {
        let $this = $(this),
            tabActive = $this.closest(elClosest).find('.js-tab');

        tabActive.find('button').removeClass("active");
        $this.addClass("active");
        let clickedTab = tabActive.find('.active');

        contentTab.removeClass("active");
        let clickedTabIndex = clickedTab.index();
        contentTab.eq(clickedTabIndex).addClass("active");
    });

    let linkTabPoll = $(".js-tab-poll > div"),
        contentTabPoll = $(".js-tab-content-poll > div"),
        elClosestPoll = '.b-poll';

    linkTabPoll.on("click", function (e) {
        let $this = $(this),
            tabActive = $this.closest(elClosestPoll).find('.js-tab-poll');

        tabActive.find('div').removeClass("active");
        $this.addClass("active");
        let clickedTab = tabActive.find('.active');

        contentTabPoll.removeClass("active");
        let clickedTabIndex = clickedTab.index();
        contentTabPoll.eq(clickedTabIndex).addClass("active");
    });
});
