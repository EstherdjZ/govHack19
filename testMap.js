// Map Init
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -27.46794, lng: 153.02809 },
    zoom: 8
  });
  var geocoder = new google.maps.Geocoder();
  map.data.loadGeoJson(
    "https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json"
  );
  map.data.addListener("click", function(event) {
    console.log("THIS IS A TEST");
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    geocodeLatLng(geocoder, event.latLng.lat(), event.latLng.lng());

    //console.log(event.feature.getGeometry().get);
    //console.log(map.data.Polygon.getLength());
    //console.log(map.data.getPosition());
    //console.log(event.getControlPosition());
    //console.log(this.getPosition());
  });
  map.data.setStyle({
    fillColor: "#C7B2B2",
    strokeWeight: 0.6
  });
}

function geocodeLatLng(geocoder, lat, long) {
  //var input = document.getElementById("latlng").value;

  var latlng = { lat: lat, lng: long };
  geocoder.geocode({ location: latlng }, function(results, status) {
    if (status === "OK") {
      if (results[0]) {
        //map.setZoom(11);
        // var marker = new google.maps.Marker({
        //   position: latlng,
        //   map: map
        // });
        //infowindow.setContent(results[0].formatted_address);
        //infowindow.open(map, marker);
        console.log(results[0].formatted_address.split(",")[1]);
      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });
}
