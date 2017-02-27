$(document).ready(function(){
  $("#filter").click(function(){
    $("#f_content").toggle();
  });
});

// start commenting after this line
//// FRIENDS LIST //
//
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
//
//function closeFriendsList(){
//  // document.getElementById("friendsList").style.width = "0";
//  document.getElementById("mapCanvas").className = "col-xs-9 col-sm-9";
//  document.getElementById("friendsList").style.display = "none";
//  document.getElementById("blank-map").style.display = "none";
//  document.getElementById("map").style.display = "inherit";
//  document.getElementById("friends-title").style.backgroundColor = "inherit";
//  document.getElementById("home-title").style.backgroundColor = "#f2ae43";
//  document.getElementById("my-map-title").style.display = "inherit";
//
//  var songs = document.querySelectorAll(".song");
//
//  var i; // display the songs by genre
//  for (i = 0; i < songs.length; i++) {
//    songs[i].style.display = "none";
//  }
//}
//
//// SELECT FRIEND MAP //
//document.getElementById("this-friend").addEventListener("click", function(){
//    document.getElementById("friend-map").style.display = "inherit";
//    document.getElementById("blank-map").style.display = "none";
//    document.getElementById("lao-map-title").style.display = "inherit";
//  document.getElementById("select-map-title").style.display = "none";
//});
//
//// "ZOOMING" //
//document.getElementById("map").addEventListener("click", function(){
////    var zoomMap = document.getElementById("map");
////    if (zoomMap.zoom > 10) {
////      zoomMap.style.border = "solid 3px white";
////    }
//      var songs = document.querySelectorAll(".song");
//
//      var i; // display the songs by genre
//      for (i = 0; i < songs.length; i++) {
//        songs[i].style.display = "inherit";
//      }
//});
//
////document.getElementById("map").addEventListener("mouseleave", function(){
////      var songs = document.querySelectorAll(".song");
////
////      var i; // display the songs by genre
////      for (i = 0; i < songs.length; i++) {
////        songs[i].style.display = "none";
////      }
////});
//
//document.getElementById("friend-map").addEventListener("click", function(){
//      var songs = document.querySelectorAll(".song");
//
//      var i; // display the songs by genre
//      for (i = 0; i < songs.length; i++) {
//        songs[i].style.display = "inherit";
//      }
//});
//
////document.getElementById("friend-map").addEventListener("mouseleave", function(){
////      var songs = document.querySelectorAll(".song");
////
////      var i; // display the songs by genre
////      for (i = 0; i < songs.length; i++) {
////        songs[i].style.display = "none";
////      }
////});
//
//// // // // // // // EXPLORE // // // // // // // //
//function openExplore() {
//  document.getElementById("mapCanvas").className = "col-xs-12 col-sm-12";
//  // don't show other map titles
//  document.getElementById("map-title").style.display = "none";
//  document.getElementById("select-map-title").style.display = "none";
//  document.getElementById("lao-map-title").style.display = "none";
//  // show explore map title
//  document.getElementById("explore-map-title").style.display = "inherit";
//
//
//}
//
//// FILTER FUNCTION //
//function filter() {
//  var f = document.getElementById("f_content");
//  var s = document.querySelectorAll(".song")
//
//  var k; // clear song list
//  for (k=0; k < s.length; k++) {
//    s[k].style.display = "none";
//  }
//
//  var i;
//  for (i=0; i < f.length; i++) { // get arr of songs by genre
//    if (f.elements[i].value =="rock") {
//      var arr = document.querySelectorAll(".rock");
//    }
//    if (f.elements[i].value =="pop") {
//      var arr = document.querySelectorAll(".pop");
//    }
//    if (f.elements[i].value =="hiphop") {
//      var arr = document.querySelectorAll(".hiphop");
//    }
//  }
//  var j; // display the songs by genre
//  for (j = 0; j < arr.length; j++) {
//    arr[j].style.display = "inherit";
//  }
//}
//
//
//
////function openFriendsList(){
////  // document.getElementById("friendsList").style.width = "250px";
////  document.getElementById("mapCanvas").className = "col-xs-6 col-sm-6";
////  document.getElementById("friendsList").style.display = "block";
////  document.getElementById("home").style.backgroundColor = "inherit";
////  document.getElementById("blank-map").style.display = "inherit";
////  document.getElementById("map").style.display = "none";
////  document.getElementById("friends-title").style.backgroundColor = "#f2ae43";
////  document.getElementById("home-title").style.backgroundColor = "inherit";
////  document.getElementById("my-map-title").style.display = "none";
////  document.getElementById("select-map-title").style.display = "inherit";
////
////  var songs = document.querySelectorAll(".song");
////
////  var i; // display the songs by genre
////  for (i = 0; i < songs.length; i++) {
////    songs[i].style.display = "none";
////  }
////}

// end of commenting before this line



 var locations = [
      ['Olivia: ♪ SONG TITLE', 42.057996, -87.676640, 4],
      ['Alyssa: ♪ Primordial Sound', 42.057799, -87.676194, 3],
      ['Xuan: ♪ SONG TITLE', 42.057995, -87.675918, 2],
      ['Evan: ♪ SONG TITLE', 42.057916, -87.675551, 1]
    ];

    var map = new google.maps.Map(document.getElementById('explore-map'), {
      zoom: 19,
      center: {lat: 42.057995, lng: -87.675918}
      //mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var you = 'https://maps.google.com/mapfiles/ms/micons/blue-dot.png';
    new google.maps.Marker({
      position: new google.maps.LatLng(42.057796, -87.675918),
      map: map,
      icon: you
    });

    var infowindow = new google.maps.InfoWindow();
    var image = 'https://maps.google.com/mapfiles/ms/micons/man.png';

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: image
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
