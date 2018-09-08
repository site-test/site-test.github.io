$(document).ready(function () {
    const limitSym = 1000;

    $('textarea').on('keyup keydown', function (e) {
        let $this = $(this);
        let lengthValue = e.target.value.length;

        let conter = $this.parent().find('.js-limit');

        if (lengthValue > limitSym) {
            e.target.value = e.target.value.substring(0, limitSym);
        } else {
            conter.text(`${limitSym - lengthValue}`);
        }
    });
});
