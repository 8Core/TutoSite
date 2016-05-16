todoApp.controller('sideNavCtrl',sideNavCtrl);

  sideNavCtrl.$inject = ['$scope','$mdSidenav'];

  function sideNavCtrl($scope,$mdSidenav)
  {
      var vm = this;
    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    var imagePath = 'img/list/60.jpeg';
    vm.todos = [
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
    /* Items del Menu */
    vm.menu = [
      {
        link : '',
        title: 'Dashboard',
        icon: 'action:ic_dashboard_24px' // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
      },
      {
        link : '',
        title: 'Friends',
        icon: 'social:ic_group_24px'
      },
      {
        link : '',
        title: 'Messages',
        icon: 'communication:ic_message_24px'
      }
    ];
    vm.admin = [
      {
        link : '',
        title: 'Trash',
        icon: 'action:ic_delete_24px'
      },
      {
        link : 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'action:ic_settings_24px'
      }
    ];
  }
