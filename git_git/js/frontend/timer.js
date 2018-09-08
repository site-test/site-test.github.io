function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    if (!clock) {
      return false
    }
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');

    var daysText = clock.querySelector('.days-text');
    var hoursText = clock.querySelector('.hours-text');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        var valDay = t.days;
        var valHours = t.hours;
        var declDays = declOfNum(valDay, ['день','дня','дней']);
        var declHours = declOfNum(valHours, ['час','часа','часов']);


        daysSpan.innerHTML = t.days;
        daysText.innerHTML = declDays;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        hoursText.innerHTML = declHours;
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);


        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "August 01 2018 00:00:00 GMT+0700"; //for russian
//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer

initializeClock('clockdiv', deadline);
