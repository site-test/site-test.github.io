$(document).ready(function () {
    let windowWidth = $(window).innerWidth()/2;
    const posTriangle = 42;
    let loginBtn = $('.js-login');
    let loginBlock = $('.b-login');

    let widthLoginBlock = loginBlock.innerWidth();
    let heightLoginBlock = loginBlock.innerHeight();

    loginBtn.on('click', function (event) {
        event.preventDefault();
        let $this = $(this);
        let heightBtn = $this.innerHeight();
        let centerPos = posTriangle - heightBtn / 2;
        let top = $this.offset().top - heightLoginBlock + heightBtn + centerPos;
        let left = $this.offset().left;

        loginBlock.removeClass('arrow-left');
        if (left > windowWidth) {
            left = left - widthLoginBlock - 10;
        } else {
            loginBlock.addClass('arrow-left');
            left += 34
        }

        loginBlock.addClass('active');
        loginBlock.css({'top': `${top}px`, 'left': `${left}px`});
    });

    $(document).click(function(event) {
        if ($(event.target).closest('.js-login').length ) return;
        if ($(event.target).closest('.b-login').length ) return;

        loginBlock.removeClass('active');
    });

});
