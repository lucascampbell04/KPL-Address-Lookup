 // Define global variables
 var map;
 var boundary;
 var historyTable;
 const apiUrl = import.meta.env.VITE_MAPBOX_API_KEY;

 export function initMap() {
   // Create a map centered on Kalamazoo, Michigan
   mapboxgl.accessToken = apiUrl;
   console.log(apiUrl); 
   map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11',
     center: [-85.5872, 42.2917], // Kalamazoo, Michigan coordinates
     zoom: 9, // Adjust the initial zoom level as needed
   });


   map.on('load', function () {
var kalamazoo = turf.point([-85.5872, 42.2917]);
var radius = 5; // 5 miles

var options = { steps: 100, units: 'miles' };
var circle = turf.circle(kalamazoo, radius, options);

map.addSource('circle', {
type: 'geojson',
data: circle
});

map.addLayer({
id: 'circle',
type: 'fill',
source: 'circle',
paint: {
 'fill-color': '#FF0000',
 'fill-opacity': 0.35
}
});

// Set the circle as the boundary
boundary = circle;
});



// Add the control to the map.
const geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl,
placeholder: 'Search for an address'
});

map.addControl(geocoder);
   // Get a reference to the history table
   historyTable = document.getElementById("historyTable").getElementsByTagName("tbody")[0];

   geocoder.on('result', function (result) {
// Get the selected place's location
var place = result.result;
var location = place.center;
var address_raw = result.result.place_name;
var address = result.result.address + ' ' + result.result.text
     console.log(result.result);
// Create a Turf.js point feature from the location
var point = turf.point([location[0], location[1]]);

// Check if the point is within the circle
var isInsideBoundary = turf.booleanPointInPolygon(point, boundary);

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

       // Show the address on the map
       var marker = new mapboxgl.Marker()
         .setLngLat(location)
         .addTo(map);
       var popup = new mapboxgl.Popup()
         .setLngLat(location)
         .setHTML(place.place_name)
         .addTo(map);
       marker.setPopup(popup);
       popup.addTo(map);

       const row = document.createElement('tr');
       row.className = "bg-white border-t-2 border-b-2 dark:bg-gray-900 dark:border-gray-700";

       const th = document.createElement('th');
       th.className = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";
       th.textContent = address_raw;

       const td = document.createElement('td');
       td.className = "px-6 py-4";
       td.textContent = "No";

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

       // Show the address on the map
       var marker = new mapboxgl.Marker()
         .setLngLat(location)
         .addTo(map);
       var popup = new mapboxgl.Popup()
         .setLngLat(location)
         .setHTML(place.place_name)
         .addTo(map);
       marker.setPopup(popup);
       popup.addTo(map);

       const row = document.createElement('tr');
       row.className = "bg-white border-t-2 border-b-2 dark:bg-gray-900 dark:border-gray-700";

       const th = document.createElement('th');
       th.className = "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";
       th.textContent = address_raw;

       const td = document.createElement('td');
       td.className = "px-6 py-4";
       td.textContent = "Yes";

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
     }
   });
 }

 document.getElementById('clearTable').addEventListener('click', function() {
  document.getElementById('historyBody').innerHTML = '';
  document.getElementById('historyTable').classList.add('hidden');
 });

 // Call the initialization function after the page has loaded
 document.addEventListener("DOMContentLoaded", function () {
   initMap();
 });

