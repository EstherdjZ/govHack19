// Map Init
var map;
var array;

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
    geocodeLatLng(geocoder, event.latLng.lat(), event.latLng.lng());
    getResult();
  });
  map.data.setStyle({
    fillColor: "#C7B2B2",
    strokeWeight: 0.6
  });
}

// get the name of the suburb
function geocodeLatLng(geocoder, lat, long) {
  var latlng = { lat: lat, lng: long };
  geocoder.geocode({ location: latlng }, function(results, status) {
    if (status === "OK") {
      if (results[0]) {
        let arrRes = [];
        let res = arrRes.push(results[0].formatted_address.split(",")[1]);

        document.querySelector(".surburb").textContent = arrRes[0];

        console.log(res);
      } else {
        window.alert("No results found");
      }
    } else {
      window.alert("Geocoder failed due to: " + status);
    }
  });
}

async function getResult() {
  const fetchPromise = await fetch("population.json");
  const res = await fetchPromise.json();
  //   const surburb = await res.records.map(el => );
  //   const poplulation = await res.records.map(el =>
  //     console.log(el[el.length - 1])
  //   );
}
