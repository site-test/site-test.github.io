$(document).ready(function() {
    if ($(window).innerWidth() > 1024) {
        $(window).mousemove(function(e) {

            let screenWidth = $(window).width();
            let screenHeight = $(window).height();

            $('.tablets--three').css({
                transform:
                'translate(-' + e.pageX / screenWidth * 20 + 'px, -' + e.pageY / screenHeight * 20 + 'px)'
            });

            $('.tablets--one').css({
                transform:
                'translate(' + e.pageX / screenWidth * 45 + 'px, ' + e.pageY / screenHeight * 45 + 'px)'
            });

            $('.tablets--two-down').css({
                transform:
                'translate(-' + e.pageX / screenWidth * 10 + 'px, -' + e.pageY / screenHeight * 35 + 'px)'
            });

            $('.tablets--two-up').css({
                transform:
                'translate(' + e.pageX / screenWidth * 45 + 'px, ' + e.pageY / screenHeight * 25 + 'px)'
            });
        });
    }

});
