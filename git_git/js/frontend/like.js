$(document).ready(function () {
    let blockLike = $('.js-like');

    blockLike.on('click', '.like__btn--up', function () {
        let $this = $(this);
        let parent = $this.parent();
        let btn = parent.find('.like__btn--down');
        let countBlock = parent.find('.like__count');
        let count = Number(countBlock.attr('data-count'));

        btn.removeClass('active');
        if ($this.hasClass('active')) {
            return
        }
        count += 1;
        countBlock.attr('data-count', count);
        countBlock.text(count);
        $this.addClass('active');
    });

    blockLike.on('click', '.like__btn--down', function () {
        let $this = $(this);
        let parent = $this.parent();
        let btn = parent.find('.like__btn--up');
        let countBlock = parent.find('.like__count');
        let count = Number(countBlock.attr('data-count'));

        btn.removeClass('active');
        if ($this.hasClass('active')) {
            return
        }
        count -= 1;
        countBlock.attr('data-count', count);
        countBlock.text(count);
        $this.addClass('active');
    });
});
