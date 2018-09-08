import Hls from 'hls.js'
$(document).ready(function () {
    let webCam = $('.js-select-webcam');
    if (!webCam.length) {
        return
    }
    var hls1
    let firstStream = $('.js-select-webcam').val();

    var v = document.createElement('video');
           v.setAttribute("id", "player-html5");
           v.setAttribute("width", "100%");
           v.setAttribute("height", "100%");
           v.setAttribute("controls", "controls");
           document.getElementById('player').appendChild(v);

           hls1 = new Hls();
           hls1.attachMedia(v);
           hls1.on(Hls.Events.MEDIA_ATTACHED, function () {
               hls1.loadSource(firstStream);
               v.play();
           });


    webCam.on('change', function () {
        hls1.destroy();
        let scrVideo = $(this).val();
            var hls = new Hls();
            var video = document.getElementById("player-html5");

            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                hls.loadSource(scrVideo);
                video.play();
            });
    });
})


