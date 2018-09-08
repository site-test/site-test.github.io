const API = 'ajax/poll.json'
$(document).ready(function () {
    $(document).on('click', '.js-poll', function () {
        let $this = $(this);
        let parent = $this.closest('.b-poll__item');
        let numberVoice = parent.find('span');
        let persentShow = parent.find('.b-poll__persent');
        let allItem = $this.closest('.b-poll__content').find('.b-poll__item');


        $.ajax({
            type    : 'GET',
            url     : API,
            success : function (data) {
                $.each(allItem, function (index, item) {
                    let $item = $(item);
                    $this.closest('.b-poll__content').addClass('b-poll__content--complete');
                    $item.find('.progress-bar').css('width', `${data[index].persent}%`)
                    $item.find('span').text(data[index].voice)
                    $item.find('.b-poll__persent').text(data[index].persent + '%')
                })
            }
        });
    });
});
