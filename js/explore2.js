$(document).ready(function(){
  $("#filter").click(function(){
    $("#f_content").toggle();
  });
});

function closeFriendsList(){
  document.getElementById("blank-map").style.display = "none";
  document.getElementById("map").style.display = "inherit";
}

// MAPS //
var John_S = '<div id="iw-container">' +
                      '<div class="iw-content">' +
                     '<img src="male1.png">' +
                     '<div class="iw-subTitle">John S.</div>' +
                     '</div>'+
                  '<p class="now_playing"><i>(now listening)</i></p>'+
                  '<p class="song_info"><b>♪ Caroline</b> by Animé</p>' +
                 '</div>';
var Sandy_P = '<div id="iw-container">' +
                      '<div class="iw-content">' +
                     '<img src="female1.png">' +
                     '<div class="iw-subTitle">Sandy P.</div>' +
                     '</div>'+
                  '<p class="now_playing"><i>(now listening)</i></p>'+
                  '<p class="song_info"><b>♪ Starboy</b> by The Weeknd</p>' +
                 '</div>';
var Lucas_G = '<div id="iw-container">' +
                      '<div class="iw-content">' +
                     '<img src="male2.png">' +
                     '<div class="iw-subTitle">Lucas G.</div>' +
                     '</div>'+
                  '<p class="now_playing"><i>(now listening)</i></p>'+
                  '<p class="song_info"><b>♪ Float On</b> by Modest Mouse</p>' +
                 '</div>';

var Kelsey_M = '<div id="iw-container">' +
                      '<div class="iw-content">' +
                      '<img src="female2.png">' +
                      '<div class="iw-subTitle">Kelsey M.</div>' +
                          '</div>'+
                      '<p class="now_playing"><i>(now listening)</i></p>'+
                      '<p class="song_info"><b>♪ Primordial Sound</b> by The Contortionist</p>' +
                  '</div>';

var Barry_C= '<div id="iw-container">' +
'<div class="iw-content">' +
'<img src="male3.png">' +
'<div class="iw-subTitle">Barry C.</div>' +
'</div>'+
'<p class="now_playing"><i>(now listening)</i></p>'+
'<p class="song_info"><b>♪ Bad Things</b> by Machine Gun Kelly</p>' +
'</div>';

var Drew_C= '<div id="iw-container">' +
'<div class="iw-content">' +
'<img src="male4.png">' +
'<div class="iw-subTitle">Drew C.</div>' +
'</div>'+
'<p class="now_playing"><i>(now listening)</i></p>'+
'<p class="song_info"><b>♪ Paris</b> by The Chainsmokers</p>' +
'</div>';

var Kent_R= '<div id="iw-container">' +
'<div class="iw-content">' +
'<img src="male5.png">' +
'<div class="iw-subTitle">Kent R.</div>' +
'</div>'+
'<p class="now_playing"><i>(now listening)</i></p>'+
'<p class="song_info"><b>♪ Fake Love</b> by Drake</p>' +
'</div>';


 var locations = [
   [Kelsey_M, 42.057996, -87.676640, 7],
   [Lucas_G, 42.057799, -87.676194, 6],
   [Sandy_P, 42.057995, -87.675918, 5],
   [John_S, 42.057916, -87.675551, 4],
   [Drew_C, 42.058791, -87.675463, 3],
   [Barry_C, 42.058066, -87.674444, 2],
    [Kent_R, 42.057548, -87.673618, 1]
    ];

    var map = new google.maps.Map(document.getElementById('explore-map'), {
      zoom: 18,
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

      google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

var carolineLoc = new google.maps.LatLng(42.057916, -87.675551);

function findCaroline() {
  infowindow.setContent(locations[6][0]);
  infowindow.open(map, marker);
  map.setCenter(carolineLoc);
  map.setZoom(24);

}
