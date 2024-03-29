window.marker = null;

function initMap() {
	var map;
	var latitude = $('#map_canvas').attr('data-latitude');
	var longitude = $('#map_canvas').attr('data-longitude');
	var mapMarker = $('#map_canvas').attr('data-marker');
	var mapMarkerName = $('#map_canvas').attr('data-marker-name');
	var kelanitissa = new google.maps.LatLng(latitude, longitude);
	var style = [];
	var mapOptions = {
		center: kelanitissa,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		backgroundColor: '#fff',
		zoom: 18,
		panControl: false,
		zoomControl: true,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
		},
	};
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var mapType = new google.maps.StyledMapType(style, {
		name: 'Grayscale',
	});
	map.mapTypes.set('grey', mapType);
	map.setMapTypeId('grey');
	var marker_image = mapMarker;
	var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(30, 45));
	marker = new google.maps.Marker({
		position: kelanitissa,
		map: map,
		icon: pinIcon,
		title: mapMarkerName,
		label: 'SLCFHR',
	});
}

var map = document.getElementById('map_canvas');
if (map != null) {
	window.addEventListener('load', (event) => {
		initMap();
	});
}
