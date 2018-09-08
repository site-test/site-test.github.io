import 'air-datepicker';

$(document).ready(function () {
    var eventDates = [1, 9, 12, 22];
    var eventMonth = [6];
    var $picker = $('.js-calendar');
    var icon = $('.b-header__calendar');
    var datepicker = $picker.datepicker({
        position: "bottom right",
        onRenderCell: function (date, cellType) {
            var currentDate = date.getDate();
            var currentMonth = date.getMonth();

            if (cellType == 'day' && eventDates.indexOf(currentDate) != -1 && eventMonth.indexOf(currentMonth) != -1) {
                return {
                    html: currentDate + '<span class="dp-note"></span>'
                }
            }
        },
    }).data('datepicker');
});

