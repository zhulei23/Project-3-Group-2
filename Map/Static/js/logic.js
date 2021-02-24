var link = "static/data/GeoObs.json";

//Call geoJSON and create the markers
d3.json(link, createMarkers);

function createMap(country_demo) {
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });
  var baseMaps = {
    "Light Map": lightmap
  };
  var overlayMaps = {
    "Survey Response": country_demo
  };
  var myMap = L.map("map", {
    center: [40, -10],
    zoom: 3,
    layers: [lightmap, country_demo]
  });
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: False
  }).addTo(myMap);
}


function createMarkers(response) {
  var countries = response.features;
  var demo_markers = [];
  for (var i=0; i < countries.length; i++) {
    var country = countries[i];
    var demo_marker =  L.marker([country.geometry.coordinates[1], country.geometry.coordinates[0]])
      .bindPopup("<h3>" + country.properties.name + "</h3><hr><h5> Survey Participants: "
      + country.properties.participants + "</h5><hr><h5> Average Age: " + country.properties.age);
    
    demo_markers.push(demo_marker);
  }
  console.log(demo_markers)

  createMap(L.layerGroup(demo_markers));
}