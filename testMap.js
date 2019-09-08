// Map Init
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -27.46794, lng: 153.02809 },
    zoom: 8
  });
  map.data.loadGeoJson(
    "https://data.gov.au/geoserver/qld-suburb-locality-boundaries-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_6bedcb55_1b1f_457b_b092_58e88952e9f0&outputFormat=json"
  );
  map.data.addListener('click', function(event){
        	console.log("THIS IS A TEST");
        	console.log(event.feature.getGeometry().get);
        	//console.log(event.getControlPosition());
        	//console.log(this.getPosition());
        })
        map.data.setStyle({
		  fillColor: '#C7B2B2',
		  strokeWeight: 0.6
	});
}
