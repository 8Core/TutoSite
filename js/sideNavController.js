angular
  .module('TutoSiteApp')
  .controller('sideNavCtrl',sideNavCtrl);

  sideNavCtrl.$inject = ['$scope','$mdSidenav'];

  function sideNavCtrl($scope,$mdSidenav)
  {
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    var imagePath = 'img/list/60.jpeg';
    $scope.todos = [
      {
        face : 'action:ic_dashboard_24px',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'social:ic_group_24px',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }
    ];
  }
