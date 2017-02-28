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
  document.getElementById("my-map-title").style.display = "none";
  document.getElementById("select-map-title").style.display = "inherit";
  document.getElementById("select_location").style.display = "none";
  document.getElementById("location_detail").style.display = "none";
  document.getElementById("genre_rock").style.display = "none";
  document.getElementById("when").style.display = "none";
  document.getElementById("filter").style.display = "none";
  document.getElementById("f_content").style.display = "none";
  document.getElementById("genre").value = "";
  document.getElementById("start-date").value = "";
  document.getElementById("end-date").value = "";
  var songs = document.querySelectorAll(".song");

  var i; // display the songs by genre
  for (i = 0; i < songs.length; i++) {
    songs[i].style.display = "none";
  }
  
  initBlankMap();
  
}

function closeFriendsList(){
  // document.getElementById("friendsList").style.width = "0";
  document.getElementById("mapCanvas").className = "col-xs-9 col-sm-9";
  document.getElementById("friendsList").style.display = "none";
  document.getElementById("blank-map").style.display = "none";
  document.getElementById("map").style.display = "inherit";
  document.getElementById("friends-title").style.backgroundColor = "inherit";
  document.getElementById("home-title").style.backgroundColor = "#f2ae43";
  document.getElementById("my-map-title").style.display = "inherit";
  //document.getElementById("topsongs_details").style.display = "inherit";
  var songs = document.querySelectorAll(".song");

  var i; // display the songs by genre
  for (i = 0; i < songs.length; i++) {
    songs[i].style.display = "none";
  }
}

// SELECT FRIEND MAP //
document.getElementById("this-friend").addEventListener("click", function(){
    document.getElementById("friend-map").style.display = "inherit";
    document.getElementById("blank-map").style.display = "none";
    document.getElementById("lao-map-title").style.display = "inherit";
    document.getElementById("select_location").style.display = "inherit";
  document.getElementById("select-map-title").style.display = "none";
  
  initFriendMap();
  
});

// "ZOOMING" //
document.getElementById("map").addEventListener("click", function(){
//    var zoomMap = document.getElementById("map");
//    if (zoomMap.zoom > 10) {
//      zoomMap.style.border = "solid 3px white";
//    }
      document.getElementById("select_location").style.display = "none";
      document.getElementById("location_detail").style.display = "inherit";
      document.getElementById("filter").style.display = "inherit";
      var songs = document.querySelectorAll(".song");

      var i; // display the songs by genre
      for (i = 0; i < songs.length; i++) {
        songs[i].style.display = "inherit";
      }
});

//document.getElementById("map").addEventListener("mouseleave", function(){
//      var songs = document.querySelectorAll(".song");
//
//      var i; // display the songs by genre
//      for (i = 0; i < songs.length; i++) {
//        songs[i].style.display = "none";
//      }
//});

document.getElementById("friend-map").addEventListener("click", function(){
    document.getElementById("select_location").style.display = "none";
    document.getElementById("location_detail").style.display = "inherit";
    document.getElementById("filter").style.display = "inherit";
      var songs = document.querySelectorAll(".song");

      var i; // display the songs by genre
      for (i = 0; i < songs.length; i++) {
        songs[i].style.display = "inherit";
      }
});

//document.getElementById("friend-map").addEventListener("mouseleave", function(){
//      var songs = document.querySelectorAll(".song");
//
//      var i; // display the songs by genre
//      for (i = 0; i < songs.length; i++) {
//        songs[i].style.display = "none";
//      }
//});

// // // // // // // EXPLORE // // // // // // // //
function openExplore() {
  document.getElementById("mapCanvas").className = "col-xs-12 col-sm-12";
  // don't show other map titles
  document.getElementById("map-title").style.display = "none";
  document.getElementById("select-map-title").style.display = "none";
  document.getElementById("lao-map-title").style.display = "none";
  // show explore map title
  document.getElementById("explore-map-title").style.display = "inherit";


}

// FILTER FUNCTION //
function filter() {
  document
  var f = document.getElementById("f_content");
  var s = document.querySelectorAll(".song")

  var k; // clear song list
  for (k=0; k < s.length; k++) {
    s[k].style.display = "none";
  }

  var i;
  for (i=0; i < f.length; i++) { // get arr of songs by genre
    if (f.elements[i].value =="rock") {
      document.getElementById("genre_rock").style.display = "inherit";
      document.getElementById("when").style.display = "inherit";
      var arr = document.querySelectorAll(".rock");
    }
    if (f.elements[i].value =="pop") {
      var arr = document.querySelectorAll(".pop");
    }
    if (f.elements[i].value =="hiphop") {
      var arr = document.querySelectorAll(".hiphop");
    }
    if (document.getElementById("start-date").value == "02/13/2017"){
    document.getElementById("when").style.display = "inherit";
    }
  }
  var j; // display the songs by genre
  for (j = 0; j < arr.length; j++) {
    arr[j].style.display = "inherit";
  }
}



//function openFriendsList(){
//  // document.getElementById("friendsList").style.width = "250px";
//  document.getElementById("mapCanvas").className = "col-xs-6 col-sm-6";
//  document.getElementById("friendsList").style.display = "block";
//  document.getElementById("home").style.backgroundColor = "inherit";
//  document.getElementById("blank-map").style.display = "inherit";
//  document.getElementById("map").style.display = "none";
//  document.getElementById("friends-title").style.backgroundColor = "#f2ae43";
//  document.getElementById("home-title").style.backgroundColor = "inherit";
//  document.getElementById("my-map-title").style.display = "none";
//  document.getElementById("select-map-title").style.display = "inherit";
//
//  var songs = document.querySelectorAll(".song");
//
//  var i; // display the songs by genre
//  for (i = 0; i < songs.length; i++) {
//    songs[i].style.display = "none";
//  }
//}

// MAPS //

var locations = [
  {lat: 42.0570876, lng: -87.68999999999999},
  {lat: 42.0570876, lng: -87.68999999999999},
  {lat: 42.0570876, lng: -87.68999999999999},
  {lat: 42.0570876, lng: -87.68999999999999},
  {lat: 42.0570876, lng: -87.68999999999999},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.052929, lng: -87.675055,},
  {lat: 42.0530798, lng: -87.68999999999999},
  {lat: 42.0530798, lng: -87.68999999999999},
  {lat: 42.0530798, lng: -87.68999999999999},
  {lat: 42.0530798, lng: -87.68999999999999},
  {lat: 42.0530798, lng: -87.68999999999999},
  {lat: 42.0530798, lng: -87.68999999999999},
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


function initFriendMap() {
  var friendMap = new google.maps.Map(document.getElementById('friend-map'), {
          zoom: 14,
          center: {lat: 42.0570876, lng: -87.6757308}
        });
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  var friendMarkers = friendLocations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
  var friendMarkerCluster = new MarkerClusterer(friendMap, friendMarkers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  
}

function initBlankMap() {
  var blankMap = new google.maps.Map(document.getElementById('blank-map'), {
          zoom: 14,
          center: {lat: 42.0570876, lng: -87.6757308}
        });
  
}

function initMap() {

//        var exploreMap = new google.maps.Map(document.getElementById('explore-map'), {
//          zoom: 14,
//          center: {lat: 42.0570876, lng: -87.6757308}
//        });

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 42.0570876, lng: -87.6757308}
        });

//        var friendMap = new google.maps.Map(document.getElementById('friend-map'), {
//          zoom: 14,
//          center: {lat: 42.0570876, lng: -87.6757308}
//        });

//        var blankMap = new google.maps.Map(document.getElementById('blank-map'), {
//          zoom: 14,
//          center: {lat: 42.0570876, lng: -87.6757308}
//        });



        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.

//        var exploreMarkers = exploreLocations.map(function(location, i) {
//          return new google.maps.Marker({
//            position: location,
//            label: labels[i % labels.length]
//          });
//        });

        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

//        var friendMarkers = friendLocations.map(function(location, i) {
//          return new google.maps.Marker({
//            position: location,
//            label: labels[i % labels.length]
//          });
//        });



        // Add a marker clusterer to manage the markers.
//        var markerCluster = new MarkerClusterer(exploreMap, exploreMarkers,
//            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
//        var friendMarkerCluster = new MarkerClusterer(friendMap, friendMarkers,
//            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

//var exploreLocations = [
//{lat: 42.0570876, lng: -87.67587739999999},
//{lat: 42.0570876, lng: -87.6757308},
//{lat: 42.0530798, lng: -87.67478489999996},
//{lat: 42.03454560000001, lng: -87.67742729999998}
//]


