var e,T,P,k;const C="pk.eyJ1IjoibHVjYXNjYW1wYmVsbCIsImEiOiJjbGs0MnQxcTAwbTU1M2ZtcjA2ZXU0cDZqIn0.frU8JiLhGAEKgzD6qfiHAg";function M(){mapboxgl.accessToken=C,console.log(C),e=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-85.6472,42.2759],zoom:11}),e.on("load",function(){e.addSource("boundary",{type:"geojson",data:"https://raw.githubusercontent.com/lucascampbell04/KPL-Address-Lookup/main/assets/boundary.geojson"}),e.addLayer({id:"boundary-layer",type:"fill",source:"boundary",paint:{"fill-color":"#FF0000","fill-opacity":.35}});var n=!1,l=new mapboxgl.Marker({color:"black"}).setLngLat([-85.6910479746956,42.29431017071524]).addTo(e),s=document.createElement("div");s.className="marker-title",s.textContent="OSH",l.getElement().appendChild(s),l.getElement().addEventListener("mouseenter",function(){if(n===!1){var t=new mapboxgl.Popup({closeButton:!1,className:"custom-popup"}).setLngLat(l.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Oshtemo Branch</h3><img src="img/osh.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(e);l.setPopup(t),s.classList.add("hidden"),console.log(t),n=!0}}),l.getElement().addEventListener("mouseleave",function(){setTimeout(()=>{n=!1},100),l.getPopup().remove(),s.classList.remove("hidden")});var y=!1,d=new mapboxgl.Marker({color:"black"}).setLngLat([-85.58076643222397,42.296230345022344]).addTo(e),a=document.createElement("div");a.className="marker-title",a.textContent="Ministry with Community",d.getElement().appendChild(a),d.getElement().addEventListener("mouseenter",function(){if(y===!1){var t=new mapboxgl.Popup({closeButton:!1,className:"custom-popup"}).setLngLat(d.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">Ministry with Community</h3><img src="img/mwc.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(e);d.setPopup(t),a.classList.add("hidden"),console.log(t),y=!0}}),d.getElement().addEventListener("mouseleave",function(){setTimeout(()=>{y=!1},100),d.getPopup().remove(),a.classList.remove("hidden")});var b=!1,c=new mapboxgl.Marker({color:"black"}).setLngLat([-85.58321960266998,42.295417037770726]).addTo(e),p=document.createElement("div");p.className="marker-title",p.textContent="Gospel Mission",c.getElement().appendChild(p),c.getElement().addEventListener("mouseenter",function(){if(b===!1){var t=new mapboxgl.Popup({closeButton:!1,className:"custom-popup"}).setLngLat(c.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">Kalamazoo Gospel Mission</h3><img src="img/kgm.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(e);c.setPopup(t),p.classList.add("hidden"),console.log(t),b=!0}}),c.getElement().addEventListener("mouseleave",function(){setTimeout(()=>{b=!1},100),c.getPopup().remove(),p.classList.remove("hidden")});var E=!1,i=new mapboxgl.Marker({color:"black"}).setLngLat([-85.54592849235212,42.30240948505161]).addTo(e),g=document.createElement("div");g.className="marker-title",g.textContent="EAS",i.getElement().appendChild(g),i.getElement().addEventListener("mouseenter",function(){if(E===!1){var t=new mapboxgl.Popup({closeButton:!1,className:"custom-popup"}).setLngLat(i.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Eastwood Branch</h3><img src="img/eas.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(e);i.setPopup(t),g.classList.add("hidden"),console.log(t),E=!0}}),i.getElement().addEventListener("mouseleave",function(){setTimeout(()=>{E=!1},100),i.getPopup().remove(),g.classList.remove("hidden")});var v=!1,o=new mapboxgl.Marker({color:"black"}).setLngLat([-85.5704453029256,42.279593189637986]).addTo(e),m=document.createElement("div");m.className="marker-title",m.textContent="WSQ",o.getElement().appendChild(m),o.getElement().addEventListener("mouseenter",function(){if(v===!1){var t=new mapboxgl.Popup({closeButton:!1,className:"custom-popup"}).setLngLat(o.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Washington Square Branch</h3><img src="img/wsq.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(e);o.setPopup(t),m.classList.add("hidden"),console.log(t),v=!0}}),o.getElement().addEventListener("mouseleave",function(){setTimeout(()=>{v=!1},100),o.getPopup().remove(),m.classList.remove("hidden")});var L=!1,r=new mapboxgl.Marker({color:"black"}).setLngLat([-85.58428424051799,42.28966464195138]).addTo(e),u=document.createElement("div");u.className="marker-title",u.textContent="CEN",r.getElement().appendChild(u),r.getElement().addEventListener("mouseenter",function(){if(L===!1){var t=new mapboxgl.Popup({closeButton:!1,className:"custom-popup"}).setLngLat(r.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Central Branch</h3><img src="img/cen.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(e);r.setPopup(t),u.classList.add("hidden"),console.log(t),L=!0}}),r.getElement().addEventListener("mouseleave",function(){setTimeout(()=>{L=!1},100),r.getPopup().remove(),u.classList.remove("hidden")});var f=!1,h=new mapboxgl.Marker({color:"black"}).setLngLat([-85.59784993654905,42.303725803292174]).addTo(e),x=document.createElement("div");x.className="marker-title",x.textContent="POW",h.getElement().appendChild(x),h.getElement().addEventListener("mouseenter",function(){if(f===!1){var t=new mapboxgl.Popup({closeButton:!1,className:"custom-popup"}).setLngLat(h.getLngLat()).setHTML('<h3 class="popup-title font-semibold text-center text-lg pb-1 border-b-2 border-opacity-100 border-dotted">KPL | Powell Branch</h3><img src="img/pow.png" class="mt-3 rounded-lg" alt="Library Image" />').addTo(e);h.setPopup(t),x.classList.add("hidden"),console.log(t),f=!0}}),h.getElement().addEventListener("mouseleave",function(){setTimeout(()=>{f=!1},100),h.getPopup().remove(),x.classList.remove("hidden")})}),e.on("sourcedata",function(n){n.isSourceLoaded&&n.sourceId==="boundary"&&(T=e.getSource("boundary"),k=e.queryRenderedFeatures({layers:["boundary-layer"]}),console.log(T))});const w=new MapboxGeocoder({accessToken:mapboxgl.accessToken,mapboxgl,placeholder:"Search for an address"});e.addControl(w),P=document.getElementById("historyTable").getElementsByTagName("tbody")[0],w.on("result",function(n){var l=n.result,s=l.center,y=n.result.place_name,d=n.result.address+" "+n.result.text,a=!1;console.log("Set variable to initial value (should be false)",a);for(var b=0;b<k.length;b++){var c=k[b],p=c.geometry;if(p.type==="Polygon"){console.log("if statement ran");var E=turf.polygon(p.coordinates),i=turf.point([s[0],s[1]]);if(console.log("Point should change each time",i),turf.booleanPointInPolygon(i,E)){a=!0,console.log("Point is inside boundary. Setting to true:",a);break}console.log("Turf is not inside boundary. Set to false:",a)}}a?Toastify({text:d+" is eligible",duration:1e4,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"linear-gradient(to right, #27d895, #36c98b)",width:"400px","max-width":"90%","font-size":"21px"}}).showToast():Toastify({text:d+" is not eligible",duration:1e4,gravity:"top",position:"right",stopOnFocus:!0,style:{background:"linear-gradient(to right, #e8172f, #d42b35)",width:"400px","max-width":"90%","font-size":"21px"}}).showToast();var g=new mapboxgl.Marker().setLngLat(s).addTo(e),v=new mapboxgl.Popup().setLngLat(s).setHTML(l.place_name).addTo(e);g.setPopup(v),v.addTo(e);const o=document.createElement("tr");o.className="bg-white border-t-2 border-b-2 dark:bg-gray-900 dark:border-gray-700";const m=document.createElement("th");m.className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",m.textContent=y;const L=document.createElement("td");L.className="px-6 py-4",L.textContent=a?"Yes":"No";const r=document.createElement("td");r.className="px-6 py-4",r.textContent="",o.appendChild(m),o.appendChild(L),o.appendChild(r);const u=document.getElementById("historyBody");document.getElementById("historyTable").classList.contains("hidden")&&document.getElementById("historyTable").classList.remove("hidden");const f=u.firstChild;f?u.insertBefore(o,f):P.appendChild(o),g.remove(),T=null}),document.getElementById("clearTable").addEventListener("click",function(){document.getElementById("historyBody").innerHTML="",document.getElementById("historyTable").classList.add("hidden")})}document.addEventListener("DOMContentLoaded",function(){M()});