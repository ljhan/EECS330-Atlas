$(document).ready(function(){
  $("#filter").click(function(){
    $("#f_content").toggle();
  });
});

var f_start = document.getElementById("start-date");
var f_end = document.getElementById("end-date");


function filter() {
  var f = document.getElementById("f_content");
  var i;
  for (i = 0; i < f.length; i++) {
    if(f.elements[i].value == "rock") {
      var x = document.getElementById("not-rock")
      var j;
      //for (j=0; j < x.length; j++) {
        x.style.display = "none"; //x[j]
      //} 
    }
  }
};



function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 42.0570876, lng: -87.6757308}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

var locations = [
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.03454560000001, lng: -87.67742729999998},
{lat: 42.03454560000001, lng: -87.67742729999998},
{lat: 42.03454560000001, lng: -87.67742729999998},
{lat: 42.03454560000001, lng: -87.67742729999998},
{lat: 42.03454560000001, lng: -87.67742729999998},
{lat: 42.03454560000001, lng: -87.67742729999998}
]
