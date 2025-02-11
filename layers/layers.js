ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-38.513472, -13.006560, -38.497703, -12.997741]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UFBASALVADOR_1 = new ol.format.GeoJSON();
var features_UFBASALVADOR_1 = format_UFBASALVADOR_1.readFeatures(json_UFBASALVADOR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UFBASALVADOR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UFBASALVADOR_1.addFeatures(features_UFBASALVADOR_1);
var lyr_UFBASALVADOR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UFBASALVADOR_1, 
                style: style_UFBASALVADOR_1,
                popuplayertitle: 'UFBA SALVADOR',
                interactive: true,
                title: '<img src="styles/legend/UFBASALVADOR_1.png" /> UFBA SALVADOR'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_UFBASALVADOR_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UFBASALVADOR_1];
lyr_UFBASALVADOR_1.set('fieldAliases', {'id': 'id', 'UNIDADE': 'UNIDADE', });
lyr_UFBASALVADOR_1.set('fieldImages', {'id': 'TextEdit', 'UNIDADE': 'TextEdit', });
lyr_UFBASALVADOR_1.set('fieldLabels', {'id': 'no label', 'UNIDADE': 'no label', });
lyr_UFBASALVADOR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});