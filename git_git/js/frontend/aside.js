$(document).ready(function () {
    let newsItem = $('.js-news-fixed');
    let heightFixedNews = newsItem.innerHeight();
    let parent = newsItem.closest('.live-news');
    parent.css('margin-top', `${heightFixedNews}px`)
});
