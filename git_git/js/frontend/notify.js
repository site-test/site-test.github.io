$(document).ready(function () {
    $(document).on('click', '.js-close-notify', function () {
        let $this = $(this);
        $this.parent().addClass('b-notify--close')
    })
})
