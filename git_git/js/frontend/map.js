$(window).on('load', function () {
    if ($('#map').length) {
        ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map("map", {
                center: [55.614690, 37.753274],
                zoom: 15,
                controls: []
            });

            myMap.behaviors.disable('scrollZoom');
            var multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: [
                    [55.613597, 37.746553],
                    [55.616718, 37.763686]
                ],
                // Параметры маршрутизации.
                params: {
                    // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                    results: 2
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                //boundsAutoApply: true
            });


            // Добавляем мультимаршрут на карту.
            myMap.geoObjects.add(multiRoute);
        }
    }
});
