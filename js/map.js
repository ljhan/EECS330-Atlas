$(document).ready(function(){
  $("#filter").click(function(){
    $("#f_content").toggle();
  });
});


// FRIENDS LIST //

function openFriendsList(){
  // document.getElementById("friendsList").style.width = "250px";
  document.getElementById("mapCanvas").className = "col-xs-6 col-sm-6";
  document.getElementById("friendsList").style.display = "block";
  document.getElementById("home").style.backgroundColor = "inherit";
  document.getElementById("blank-map").style.display = "inherit";
  document.getElementById("map").style.display = "none";
  document.getElementById("friends-title").style.backgroundColor = "#f2ae43";
  document.getElementById("home-title").style.backgroundColor = "inherit";
}

function closeFriendsList(){
  // document.getElementById("friendsList").style.width = "0";
  document.getElementById("mapCanvas").className = "col-xs-9 col-sm-9";
  document.getElementById("friendsList").style.display = "none";
  document.getElementById("blank-map").style.display = "none";
  document.getElementById("map").style.display = "inherit";
  document.getElementById("friends-title").style.backgroundColor = "inherit";
  document.getElementById("home-title").style.backgroundColor = "#f2ae43";
}

// SELECT FRIEND MAP //
document.getElementById("this-friend").addEventListener("click", function(){
    document.getElementById("friend-map").style.display = "inherit";
    document.getElementById("blank-map").style.display = "none";
});

// "ZOOMING" //
document.getElementById("map").addEventListener("mouseenter", function(){
//    var zoomMap = document.getElementById("map");
//    if (zoomMap.zoom > 10) {
//      zoomMap.style.border = "solid 3px white";
//    }
      var songs = document.querySelectorAll(".song");
      
      var i; // display the songs by genre
      for (i = 0; i < songs.length; i++) {
        songs[i].style.display = "inherit";
      }
});

document.getElementById("map").addEventListener("mouseleave", function(){
      var songs = document.querySelectorAll(".song");
  
      var i; // display the songs by genre
      for (i = 0; i < songs.length; i++) {
        songs[i].style.display = "none";
      }
});


// FILTER FUNCTION //
function filter() {
  var f = document.getElementById("f_content");
  var s = document.querySelectorAll(".song")
  
  var k; // clear song list
  for (k=0; k < s.length; k++) {
    s[k].style.display = "none";
  }
  
  var i;
  for (i=0; i < f.length; i++) { // get arr of songs by genre
    if (f.elements[i].value =="rock") {
      var arr = document.querySelectorAll(".rock");
    }
    if (f.elements[i].value =="pop") {
      var arr = document.querySelectorAll(".pop");
    }
    if (f.elements[i].value =="hiphop") {
      var arr = document.querySelectorAll(".hiphop");
    }
  }
  var j; // display the songs by genre
  for (j = 0; j < arr.length; j++) {
    arr[j].style.display = "inherit";
  }
}




// MAPS //

function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 42.0570876, lng: -87.6757308}
        });
  
        var friendMap = new google.maps.Map(document.getElementById('friend-map'), {
          zoom: 14,
          center: {lat: 42.0570876, lng: -87.6757308}
        });
  
        var blankMap = new google.maps.Map(document.getElementById('blank-map'), {
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
  
        var friendMarkers = friendLocations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        var friendMarkerCluster = new MarkerClusterer(friendMap, friendMarkers,
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

var friendLocations = [
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.67587739999999},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0570876, lng: -87.6757308},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.0530798, lng: -87.67478489999996},
{lat: 42.03454560000001, lng: -87.67742729999998},
{lat: 42.03454560000001, lng: -87.67742729999998}
]
