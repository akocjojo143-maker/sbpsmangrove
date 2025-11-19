var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MUZ_SBPS_1 = new ol.format.GeoJSON();
var features_MUZ_SBPS_1 = format_MUZ_SBPS_1.readFeatures(json_MUZ_SBPS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUZ_SBPS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUZ_SBPS_1.addFeatures(features_MUZ_SBPS_1);
var lyr_MUZ_SBPS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUZ_SBPS_1, 
                style: style_MUZ_SBPS_1,
                popuplayertitle: 'MUZ_SBPS',
                interactive: true,
                title: '<img src="styles/legend/MUZ_SBPS_1.png" /> MUZ_SBPS'
            });

lyr_EsriStreet_0.setVisible(true);lyr_MUZ_SBPS_1.setVisible(true);
var layersList = [lyr_EsriStreet_0,lyr_MUZ_SBPS_1];
lyr_MUZ_SBPS_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', 'OBJECTID': 'OBJECTID', 'PA_Name': 'PA_Name', 'SEALANES': 'SEALANES', 'MUNICITY': 'MUNICITY', 'HABITATS': 'HABITATS', 'SUBZONES': 'SUBZONES', 'MAIN_ZONES': 'MAIN_ZONES', 'Area': 'Area', 'MPA_NAME': 'MPA_NAME', 'MPA_STATUS': 'MPA_STATUS', });
lyr_MUZ_SBPS_1.set('fieldImages', {'id': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', 'OBJECTID': '', 'PA_Name': '', 'SEALANES': '', 'MUNICITY': '', 'HABITATS': '', 'SUBZONES': '', 'MAIN_ZONES': '', 'Area': '', 'MPA_NAME': '', 'MPA_STATUS': '', });
lyr_MUZ_SBPS_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', 'OBJECTID': 'no label', 'PA_Name': 'no label', 'SEALANES': 'no label', 'MUNICITY': 'no label', 'HABITATS': 'no label', 'SUBZONES': 'no label', 'MAIN_ZONES': 'no label', 'Area': 'no label', 'MPA_NAME': 'no label', 'MPA_STATUS': 'no label', });
lyr_MUZ_SBPS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});