$(document).ready(function () {
    var player;
    if ($('#ytplayer').length) {
        player = new YT.Player('ytplayer', {
            events: {
                'onStateChange': function (event) {
                    if ((event.data == YT.PlayerState.PAUSED)) {

                        let parent = $('.news__btn-play').closest('.news');
                        parent.removeClass('news--hidden')
                        parent.find('.news__wrap').removeClass('news__wrap--hidden')
                    }

                }
            }
        });
    }

    $('.news__btn-play').on('click', function () {
        let $this = $(this);
        let parent = $this.closest('.news');
        parent.addClass('news--hidden')
        parent.find('.news__wrap').addClass('news__wrap--hidden')
        player.playVideo();
    })
})
