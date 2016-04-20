(function () {
    'use strict';
var app = angular.module('TutoSiteApp', ['ngMaterial','ngGeolocation']);

app.controller('locationSearchCtrl', ['$geolocation','$scope',locationSearchCtrl]);
function locationSearchCtrl($geolocation,$scope) {
  $geolocation.watchPosition({
            timeout: 60000,
            maximumAge: 250,
            enableHighAccuracy: true
    });
    $scope.myCoords = $geolocation.position.coords;
    var map;
    var geocoder;
    $scope.view = {
      addressInput: '',
      places: [],
      selectedPlace: '',
      markers: []
    };
    inicializeComponents();
    function inicializeComponents() {
      var mapConfig = {
        center: $scope.myCoords,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('locationSearchMap'),mapConfig);
      geocoder = new google.maps.Geocoder();
      var marker = new google.maps.Marker(
        {
          position: {lat: 14.595679, lng:-90.547002},
          optimized: false,
          title: "Sharolin Lupita Lacunza Gonz!!"
        }
      );
      marker.setMap(map);
      var infowindow = new google.maps.InfoWindow(
        {
          content: 'Lupita'
        });
        marker.addListener('click', function()
        {
          infowindow.open(map, marker);
        });
    }
}
})();
/*
//Implementacion utilizando librerias ubicacion del GPS
app.controller('locationSearchMapGPSCtrl',['$geolocation','$scope',function($geolocation,$scope){
  $geolocation.watchPosition(
    {
      timeout: 60000,
      maximumAge: 250,
      enableHighAccuracy: true
    })
  $scope.$watch('myPosition.coords', function (newValue, oldValue)
  {
    $scope.map = {
      center: {
        latitude: newValue.latitude,
        longitude: newValue.longitude
      },
      zoom: 16
    };
  }, true);

}]);
//Implementacion randomica con posicion quemada usando tambien google-maps
app.controller('locationSearchMapBurnCtrl',function($scope){
  GoogleMapsLoader.load(function(google){
    var mapOptions = {
      zoom: 11,
      center: new google.maps.LatLng(54.5767,-1.2355)
    };
    _map = new google.maps.Map(document.getElementById('map'),mapOptions);
  });
});*/
