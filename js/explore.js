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

 var locations = [
      ['Olivia: ♪ Float On', 42.057996, -87.676640, 7],
      ['Alyssa: ♪ Primordial Sound', 42.057799, -87.676194, 6],
      ['Xuan: ♪ Starboy', 42.057995, -87.675918, 5],
      ['Evan: ♪ Caroline', 42.057916, -87.675551, 4]
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
