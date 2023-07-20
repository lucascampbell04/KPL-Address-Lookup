// Define global variables
var map;
var boundary;
var historyTable;
var features;
const apiUrl = 'pk.eyJ1IjoibHVjYXNjYW1wYmVsbCIsImEiOiJjbGs0MnQxcTAwbTU1M2ZtcjA2ZXU0cDZqIn0.frU8JiLhGAEKgzD6qfiHAg';
function initMap() {
	// Create a map centered on Kalamazoo, Michigan
	mapboxgl.accessToken = apiUrl;
	console.log(apiUrl);
	map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [-85.6472,
			42.2759
		], // Kalamazoo, Michigan coordinates
		zoom: 11, // Adjust the initial zoom level as needed
	});
	map.on('load', function () {
		// Load the GeoJSON file
		map.addSource('boundary', {
			type: 'geojson',
			data: 'https://raw.githubusercontent.com/lucascampbell04/KPL-Address-Lookup/main/assets/boundary.geojson',
		});
		map.addLayer({
			id: 'boundary-layer',
			type: 'fill',
			source: 'boundary', // Use the correct source ID
			paint: {
				'fill-color': '#FF0000',
				'fill-opacity': 0.35,
			},
		});
		// MARKER OSH
		var hoverTimeoutOSH = false;
		var markerOSH = new mapboxgl.Marker({
				color: 'black'
			}).setLngLat([-85.6910479746956,
				42.29431017071524
			]) // Coordinates for OSH branch
			.addTo(map);
		var titleElementOSH = document.createElement('div');
		titleElementOSH.className = 'marker-title';
		titleElementOSH.textContent = 'OSH';
		markerOSH.getElement().appendChild(titleElementOSH);
		// Add the popup functionality for OSH marker
		markerOSH.getElement().addEventListener('mouseenter', function () {
			if (hoverTimeoutOSH === false) {
				var popup = new mapboxgl.Popup({
					closeButton: false,
					className: 'custom-popup',
				}).setLngLat(markerOSH.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Oshtemo Branch</h3><img src="img/osh.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(map);
				markerOSH.setPopup(popup);
				titleElementOSH.classList.add('hidden');
				console.log(popup);
				hoverTimeoutOSH = true;
			}
		});
		markerOSH.getElement().addEventListener('mouseleave', function () {
			setTimeout(
				() => {
					hoverTimeoutOSH = false;
				}, 100);
			markerOSH.getPopup().remove();
			titleElementOSH.classList.remove('hidden');
		});
		// MARKER MWC
		var hoverTimeoutMWC = false;
		var markerMWC = new mapboxgl.Marker({
				color: 'black'
			}).setLngLat([-85.58076643222397,
				42.296230345022344
			]) // Coordinates for Ministry with Community
			.addTo(map);
		var titleElementMWC = document.createElement('div');
		titleElementMWC.className = 'marker-title';
		titleElementMWC.textContent = 'Ministry with Community';
		markerMWC.getElement().appendChild(titleElementMWC);
		// Add the popup functionality for OSH marker
		markerMWC.getElement().addEventListener('mouseenter', function () {
			if (hoverTimeoutMWC === false) {
				var popup = new mapboxgl.Popup({
					closeButton: false,
					className: 'custom-popup',
				}).setLngLat(markerMWC.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">Ministry with Community</h3><img src="img/mwc.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(map);
				markerMWC.setPopup(popup);
				titleElementMWC.classList.add('hidden');
				console.log(popup);
				hoverTimeoutMWC = true;
			}
		});
		markerMWC.getElement().addEventListener('mouseleave', function () {
			setTimeout(
				() => {
					hoverTimeoutMWC = false;
				}, 100);
			markerMWC.getPopup().remove();
			titleElementMWC.classList.remove('hidden');
		});
		// MARKER KGM
		var hoverTimeoutKGM = false;
		var markerKGM = new mapboxgl.Marker({
				color: 'black'
			}).setLngLat([-85.58321960266998,
				42.295417037770726
			]) // Coordinates for Kalamazoo Gospel Mission
			.addTo(map);
		var titleElementKGM = document.createElement('div');
		titleElementKGM.className = 'marker-title';
		titleElementKGM.textContent = 'Gospel Mission';
		markerKGM.getElement().appendChild(titleElementKGM);
		// Add the popup functionality for OSH marker
		markerKGM.getElement().addEventListener('mouseenter', function () {
			if (hoverTimeoutKGM === false) {
				var popup = new mapboxgl.Popup({
					closeButton: false,
					className: 'custom-popup',
				}).setLngLat(markerKGM.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">Kalamazoo Gospel Mission</h3><img src="img/kgm.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(map);
				markerKGM.setPopup(popup);
				titleElementKGM.classList.add('hidden');
				console.log(popup);
				hoverTimeoutKGM = true;
			}
		});
		markerKGM.getElement().addEventListener('mouseleave', function () {
			setTimeout(
				() => {
					hoverTimeoutKGM = false;
				}, 100);
			markerKGM.getPopup().remove();
			titleElementKGM.classList.remove('hidden');
		});
		// MARKER EAS 
		var hoverTimeoutEAS = false;
		var markerEAS = new mapboxgl.Marker({
				color: 'black'
			}).setLngLat([-85.54592849235212,
				42.30240948505161
			]) // Coordinates for EAS branch
			.addTo(map);
		var titleElementEAS = document.createElement('div');
		titleElementEAS.className = 'marker-title';
		titleElementEAS.textContent = 'EAS';
		markerEAS.getElement().appendChild(titleElementEAS);
		// Add the popup functionality for EAS marker
		markerEAS.getElement().addEventListener('mouseenter', function () {
			if (hoverTimeoutEAS === false) {
				var popup = new mapboxgl.Popup({
					closeButton: false,
					className: 'custom-popup',
				}).setLngLat(markerEAS.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Eastwood Branch</h3><img src="img/eas.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(map);
				markerEAS.setPopup(popup);
				titleElementEAS.classList.add('hidden');
				console.log(popup);
				hoverTimeoutEAS = true;
			}
		});
		markerEAS.getElement().addEventListener('mouseleave', function () {
			setTimeout(
				() => {
					hoverTimeoutEAS = false;
				}, 100);
			markerEAS.getPopup().remove();
			titleElementEAS.classList.remove('hidden');
		});
		// MARKER WSQ
		var hoverTimeoutWSQ = false;
		var markerWSQ = new mapboxgl.Marker({
				color: 'black'
			}).setLngLat([-85.5704453029256,
				42.279593189637986
			]) // Coordinates for WSQ branch
			.addTo(map);
		var titleElementWSQ = document.createElement('div');
		titleElementWSQ.className = 'marker-title';
		titleElementWSQ.textContent = 'WSQ';
		markerWSQ.getElement().appendChild(titleElementWSQ);
		// Add the popup functionality for WSQ marker
		markerWSQ.getElement().addEventListener('mouseenter', function () {
			if (hoverTimeoutWSQ === false) {
				var popup = new mapboxgl.Popup({
					closeButton: false,
					className: 'custom-popup',
				}).setLngLat(markerWSQ.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Washington Square Branch</h3><img src="img/wsq.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(map);
				markerWSQ.setPopup(popup);
				titleElementWSQ.classList.add('hidden');
				console.log(popup);
				hoverTimeoutWSQ = true;
			}
		});
		markerWSQ.getElement().addEventListener('mouseleave', function () {
			setTimeout(
				() => {
					hoverTimeoutWSQ = false;
				}, 100);
			markerWSQ.getPopup().remove();
			titleElementWSQ.classList.remove('hidden');
		});
		// MARKER CEN
		var hoverTimeoutCEN = false;
		var markerCEN = new mapboxgl.Marker({
				color: 'black'
			}).setLngLat([-85.58428424051799,
				42.28966464195138
			]) // Coordinates for CEN branch
			.addTo(map);
		var titleElementCEN = document.createElement('div');
		titleElementCEN.className = 'marker-title';
		titleElementCEN.textContent = 'CEN';
		markerCEN.getElement().appendChild(titleElementCEN);
		// Add the popup functionality for CEN marker
		markerCEN.getElement().addEventListener('mouseenter', function () {
			if (hoverTimeoutCEN === false) {
				var popup = new mapboxgl.Popup({
					closeButton: false,
					className: 'custom-popup',
				}).setLngLat(markerCEN.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Central Branch</h3><img src="img/cen.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(map);
				markerCEN.setPopup(popup);
				titleElementCEN.classList.add('hidden');
				console.log(popup);
				hoverTimeoutCEN = true;
			}
		});
		markerCEN.getElement().addEventListener('mouseleave', function () {
			setTimeout(
				() => {
					hoverTimeoutCEN = false;
				}, 100);
			markerCEN.getPopup().remove();
			titleElementCEN.classList.remove('hidden');
		});
		// MARKER POW
		var hoverTimeoutPOW = false;
		var markerPOW = new mapboxgl.Marker({
			color: 'black'
		}).setLngLat([-85.59749681192066,
			42.30384992738545
		]) // Coordinates for POW branch
		var titleElementPOW = document.createElement('div');
		titleElementPOW.className = 'marker-title';
		titleElementPOW.textContent = 'POW';
		markerPOW.getElement().appendChild(titleElementPOW);
		// Add the popup functionality for POW marker
		markerPOW.getElement().addEventListener('mouseenter', function () {
			if (hoverTimeoutPOW === false) {
				var popup = new mapboxgl.Popup({
					closeButton: false,
					className: 'custom-popup',
				}).setLngLat(markerPOW.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Powell Branch</h3><img src="img/pow.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(map);
				markerPOW.setPopup(popup);
				titleElementPOW.classList.add('hidden');
				console.log(popup);
				hoverTimeoutPOW = true;
			}
		});
		markerPOW.getElement().addEventListener('mouseleave', function () {
			setTimeout(
				() => {
					hoverTimeoutPOW = false;
				}, 100);
			markerPOW.getPopup().remove();
			titleElementPOW.classList.remove('hidden');
		});
	});
	map.on('sourcedata', function (e) {
		if (e.isSourceLoaded && e.sourceId === 'boundary') {
			boundary = map.getSource('boundary');
			features = map.queryRenderedFeatures({
				layers: ['boundary-layer']
			});
			console.log(boundary);
		}
	});
	// Add the control to the map.
	const geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		placeholder: 'Search for an address',
	});
	map.addControl(geocoder);
	// Get a reference to the history table
	historyTable = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
	geocoder.on('result', function (result) {
		// Get the selected place's location
		var place = result.result;
		var location = place.center;
		var address_raw = result.result.place_name;
		var address = result.result.address + ' ' + result.result.text;
		// Check if the point is within the boundary layer
		var isInsideBoundary = false; // Move the variable declaration here
		console.log("Set variable to initial value (should be false)", isInsideBoundary);
		for (var i = 0; i < features.length; i++) {
			var feature = features[i];
			var geometry = feature.geometry;
			if (geometry.type === 'Polygon') {
				console.log('if statement ran');
				var polygon = turf.polygon(geometry.coordinates);
				var point = turf.point([location[0], location[1]]);
				console.log("Point should change each time", point);
				if (turf.booleanPointInPolygon(point, polygon)) {
					isInsideBoundary = true;
					console.log("Point is inside boundary. Setting to true:", isInsideBoundary);
					break;
				}
				console.log("Turf is not inside boundary. Set to false:", isInsideBoundary);
			}
		}
		if (!isInsideBoundary) {
			// Display failure toast and show the address on the map if outside the boundary
			Toastify({
				text: address + " is not eligible",
				duration: 10000,
				gravity: "top", // `top` or `bottom`
				position: "right", // `left`, `center` or `right`
				stopOnFocus: true, // Prevent dismissing of toast on hover
				style: {
					background: "linear-gradient(to right, #e8172f, #d42b35)",
					width: "400px", // Adjust the width as needed
					"max-width": "90%", // Adjust the maximum width as needed
					"font-size": "21px", // Adjust the font size as needed
				},
			}).showToast();
		} else {
			// Display success toast and show the address on the map if inside the boundary
			Toastify({
				text: address + " is eligible",
				duration: 10000,
				gravity: "top", // `top` or `bottom`
				position: "right", // `left`, `center` or `right`
				stopOnFocus: true, // Prevent dismissing of toast on hover
				style: {
					background: "linear-gradient(to right, #27d895, #36c98b)",
					width: "400px", // Adjust the width as needed
					"max-width": "90%", // Adjust the maximum width as needed
					"font-size": "21px", // Adjust the font size as needed
				},
			}).showToast();
		}
		// Show the address on the map
		var marker = new mapboxgl.Marker().setLngLat(location).addTo(map);
		var popup = new mapboxgl.Popup().setLngLat(location).setHTML(place.place_name).addTo(map);
		marker.setPopup(popup);
		popup.addTo(map);
		const row = document.createElement('tr');
		row.className = "bg-white border-t-2 border-b-2 dark:bg-gray-900 dark:border-gray-700";
		const th = document.createElement('th');
		th.className = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";
		th.textContent = address_raw;
		const td = document.createElement('td');
		td.className = "px-6 py-4";
		td.textContent = isInsideBoundary ? "Yes" : "No";
		const td2 = document.createElement('td');
		td2.className = "px-6 py-4";
		td2.textContent = "";
		row.appendChild(th);
		row.appendChild(td);
		row.appendChild(td2);
		const tableBody = document.getElementById('historyBody');
		if (document.getElementById('historyTable').classList.contains('hidden')) {
			document.getElementById('historyTable').classList.remove('hidden');
		}
		const firstRow = tableBody.firstChild;
		if (firstRow) {
			tableBody.insertBefore(row, firstRow);
		} else {
			historyTable.appendChild(row);
		}
		// Remove previous markers and popups
		marker.remove();
		// Reset boundary variable
		boundary = null;
	});
	document.getElementById('clearTable').addEventListener('click', function () {
		document.getElementById('historyBody').innerHTML = '';
		document.getElementById('historyTable').classList.add('hidden');
	});
}
// Call the initialization function after the page has loaded
document.addEventListener('DOMContentLoaded', function () {
	initMap();
});