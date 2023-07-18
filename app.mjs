// Define global variables
var map;
var boundary;
var historyTable;
var features;
const apiUrl = import.meta.env.VITE_MAPBOX_API_KEY;
export function initMap() {
  // Create a map centered on Kalamazoo, Michigan
  mapboxgl.accessToken = apiUrl;
  console.log(apiUrl);
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-85.6472, 42.2759], // Kalamazoo, Michigan coordinates
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
  });

  map.on('sourcedata', function (e) {
    if (e.isSourceLoaded && e.sourceId === 'boundary') {
      boundary = map.getSource('boundary');
      features = map.queryRenderedFeatures({ layers: ['boundary-layer'] });
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
        duration: 3000,
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
        duration: 3000,
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
