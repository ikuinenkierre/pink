var map,hiddenNav=document.querySelector(".page-header__main-nav--no-js"),nav=document.querySelector(".page-header__nav"),toggleButton=document.querySelector(".page-header__toggle");hiddenNav.classList.remove("page-header__main-nav--no-js"),toggleButton.addEventListener("click",function(e){e.preventDefault(),toggleButton.classList.toggle("page-header__toggle--closed"),nav.classList.toggle("page-header__nav--open")}),initMap=function(){map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:new google.maps.LatLng(59.93631,30.321901),mapTypeId:"roadmap"});var e={position:new google.maps.LatLng(59.93631,30.321901)};new google.maps.Marker({position:e.position,icon:"img/map-pin.svg",map:map})};