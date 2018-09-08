const API_KEY = 'b99ea2cdf3b791eefdf1df047563ca21';
const CITY = '1510018'; // Бийск
const API_WEATHER = `http://api.openweathermap.org/data/2.5/weather?id=${CITY}&APPID=${API_KEY}&units=metric`;

$(document).ready(function () {
    let tempBlock = $('.js-weather').find('span');
    let iconBlock = $('.js-weather').find('.icon');
    iconBlock.addClass(`icon--02d`)
    // $.ajax({
    //     type    : 'GET',
    //     url     : API_WEATHER,
    //     success : function (data) {
    //         let temp = data.main.temp;
    //         let iconWeather = data.weather[0].icon;
    //
    //         tempBlock.text(`+${temp}`)
    //         iconBlock.addClass(`icon--${iconWeather}`)
    //         console.log(temp)
    //         console.log(iconWeather)
    //     },
    // });
});
