var hiddenNav = document.querySelector(".page-header__main-nav--no-js");
var nav = document.querySelector(".page-header__nav");
var toggleButton = document.querySelector(".page-header__toggle");

hiddenNav.classList.remove("page-header__main-nav--no-js");

toggleButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleButton.classList.toggle("page-header__toggle--closed");
  nav.classList.toggle("page-header__nav--open");
});

// Генерация карты

var map;
initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(59.936310,  30.321901),
    mapTypeId: 'roadmap'
  });

  var iconBase = 'img/';
  var icon = iconBase + 'map-pin.svg';

  var feature = {
    position: new google.maps.LatLng(59.936310,  30.321901)
  };

 // Create markers. 
  var marker = new google.maps.Marker({
    position: feature.position,
    icon: icon,
    map: map
  });
}


