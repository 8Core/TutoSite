angular
  .module('TutoSiteApp')
  .controller('locationSearchCtrl',locationSearchCtrl);

  //locationSearchCtrl.$inject = ['$geolocation','$scope','factory'];

  function locationSearchCtrl($geolocation,$scope, factory)
  {
    captureUserLocation();
    function captureUserLocation()
    {
      factory.getCurrentPosition().then(function(positionOk)
      {
        var map;
        var geocoder;
        $scope.view = {
            addressInput: '',
            places: [],
            selectedPlace: '',
            markers: []
          };
        var mapConfig = {
          center: {lat: positionOk.coords.latitude, lng: positionOk.coords.longitude},
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
          var marker = new google.maps.Marker(
            {
              position: {lat: positionOk.coords.latitude, lng: positionOk.coords.longitude},
              optimized: false,
              title: "Tu estas Aqui!!"
            }
          );
          map = new google.maps.Map(document.getElementById('locationSearchMap'),mapConfig);
          geocoder = new google.maps.Geocoder();

          marker.setMap(map);
        },
        function(positionWrong) {
          var mapConfig = {
            center:  {lat: 14.6283316, lng: -90.5111596},
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          map = new google.maps.Map(document.getElementById('locationSearchMap'),mapConfig);
          geocoder = new google.maps.Geocoder();
        });

      }
  }
