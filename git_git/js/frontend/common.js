$(document).ready(function() {
    $('.fullpage-slider__more').on('click', function() {
        $('html, body').animate({scrollTop: $('#scroll-more').offset().top - 130}, 'slow');
        return false;
    })

    let hashTag = $('.js-show-hash-tag');
    hashTag.on('click', function() {
        let $this = $(this);
        let hiddenTag = $this.parent().children();
        $this.addClass('active');
        hiddenTag.removeClass('hidden');
    })

    let linkYouTube = $('.js-youtube');

    linkYouTube.on('click', function(e) {
        e.stopPropagation();
        let url = $(this).attr('data-link');
        document.location.href = url;
    });

    $('.b-header__phone-arrow').on('click', function() {
        let $this = $(this);
        let parent = $this.next();
        $this.toggleClass('active')
        parent.toggleClass('active')
    });

    $('.b-main__2-col-show').on('click', function() {
        let $this = $(this);
        $this.toggleClass('active');
        let parent = $this.prev();
        parent.find('p:last-child').fadeToggle()
    })

    $('.health-step__item').on('click', function() {
        let $this = $(this);
        $this.addClass('active')
    });

    $('.health-step__close').on('click', function(e) {
        e.stopPropagation()
        let $this = $(this);
        $this.closest('.health-step__item').removeClass('active')
    });

    $('.js-label-form').on('click', function() {
        let $this = $(this);
        $this.closest('.js-form-transform').addClass('active');
    });

    $('.js-close-form').on('click', function() {
        let $this = $(this);
        $this.closest('.js-form-transform').removeClass('active');
    });

    // setTimeout(function() {
    //     $('.b-left-form').addClass('active');
    // }, 16000)

    $('.clinic-slider__more').on('click', function() {
        let $this = $(this);

        $this.prev().find('.clinic-slider__hidden').fadeToggle();
        if ($this.text() === 'Cкрыть') {
            $this.text('Читать полностью')
        } else {
            $this.text('Cкрыть')
        }
    });

    $('.js-show-more').on('click', function() {
        let $this = $(this);

        $this.parent().prev().find('.hidden').fadeToggle();
        if ($this.text() === 'Cкрыть') {
            $this.text('Показать еще')
        } else {
            $this.text('Cкрыть')
        }
    });

    $('.fullpage-top__control').on('click', function() {
        let $this = $(this);
        $this.toggleClass('fullpage-top__control--pause');

        if ($('#clinic-video').get(0).paused) {
            $('#clinic-video').get(0).play();
        } else {
            $('#clinic-video').get(0).pause();
        }
    });

    $('.js-anchor-lg').click(function(e) {
        e.preventDefault();
        var aid = $(this).attr('href');
        $('html,body').animate({scrollTop: $(aid).offset().top - 155}, 'slow');
    });

    $('.step-company__item').hover(
        function() {
            $('.step-company__item').removeClass('active')
        }, function() {
            let $this = $(this);
            $this.addClass('active')
        });

});
