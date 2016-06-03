ymaps.ready(['map.metaOptions']).then(function (ym) {
                                                                             
    ymaps.map.metaOptions.set('groundPaneViewportMargin', 600);
                                                                             
    var map = window.myMap = new ym.Map('map', {
            center: [55.74524234796502, 37.586730756347656],
            zoom: 12,
            controls: []
        }, {
            layerTilePositionEngine: 'css3-3d',
            dragInertiaDuration: 'auto',
            dragInertiaMinDistance: 0,
//            layerTileAnimateOpacity: false,
//            avoidFractionalZoom: true,
//            layerWebglEnabled: false,
        }),
        geoObject = new ym.Placemark(map.getCenter(), {
            iconContent: 'Go here',
            balloonContent: 'Lorem ipsum dolor sit amet'
        }, {
            preset: 'islands#redStretchyIcon'
        });

    map.geoObjects.add(geoObject);

    setupControls(map);

}).fail(function (err) {
    console.err(err);
});

function setupControls (map) {
    var typeSelector = new ymaps.control.TypeSelector({
            options: {
                layout: 'round#listBoxLayout',
                itemLayout: 'round#listBoxItemLayout',
                itemSelectableLayout: 'round#listBoxItemSelectableLayout',
                position: {
                    right: 20,
                    bottom: 375
                }
            }
        }),
        geolocationControl = new ymaps.control.GeolocationControl({ options: {
            layout: 'round#buttonLayout',
            position: {
                right: 20,
                bottom: 312
            }
        }}),
        zoomControl = new ymaps.control.ZoomControl({ options: {
            layout: 'round#zoomLayout',
            position: {
                right: 20,
                bottom: 200
            }
        }});

    myMap.controls
        .add(typeSelector)
        .add(geolocationControl)
        .add(zoomControl);
}