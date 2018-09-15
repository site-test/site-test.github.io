$(document).ready(function() {
    $('.js-hover-head').hover(
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-container-head');
            let activeEl = $this.find('.js-hidden');
            activeEl.addClass('active')
            parent.addClass('active')
        },
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-container-head');
            let activeEl = $this.find('.js-hidden');
            activeEl.removeClass('active')
            parent.removeClass('active')
        }
    );

    $('.js-hover-breast').hover(
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-container-breast');
            let activeEl = $this.find('.js-hidden');
            activeEl.addClass('active')
            parent.addClass('active')
        },
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-container-breast');
            let activeEl = $this.find('.js-hidden');
            activeEl.removeClass('active')
            parent.removeClass('active')
        }
    );

    $('.js-hover-body').hover(
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-container-body');
            let activeEl = $this.find('.js-hidden');
            activeEl.addClass('active')
            parent.addClass('active')

        },
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-container-body');

            let activeEl = $this.find('.js-hidden');
            activeEl.removeClass('active')
            parent.removeClass('active')

        }
    );

    let headContainer = $('.js-container-head');
    let breastContainer = $('.js-container-breast');
    let bodyContainer = $('.js-container-body');

    headContainer.hover(
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-hover-head');
            let activeEl = parent.find('.js-hidden');
            activeEl.addClass('active')
        },
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-hover-head');
            let activeEl = parent.find('.js-hidden');
            activeEl.removeClass('active')
        }
    );

    breastContainer.hover(
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-hover-breast');
            let activeEl = parent.find('.js-hidden');
            activeEl.addClass('active')
        },
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-hover-breast');
            let activeEl = parent.find('.js-hidden');
            activeEl.removeClass('active')
        }
    );

    bodyContainer.hover(
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-hover-body');
            let activeEl = parent.find('.js-hidden');
            activeEl.addClass('active')
        },
        function() {
            let $this = $(this);
            let parent = $this.closest('.services').find('.js-hover-body');
            let activeEl = parent.find('.js-hidden');
            activeEl.removeClass('active')
        }
    );
});
