todoApp.controller('myLinksCtrl',myLinksCtrl);

  myLinksCtrl.$inject = ['$scope','$mdDialog'];

  function myLinksCtrl($scope,$mdDialog) {
    $scope.mylinks = [
      {
        name: 'Juan',
        lastName: 'Ramirez',
        profile: 'avatars:svg-5'
      },
      {
        name: 'Pedro',
        lastName: 'Escalante',
        profile: 'avatars:svg-5'
      },
      {
        name: 'Maria',
        lastName: 'Agustin',
        profile: 'avatars:svg-5'
      },
      {
        name: 'Maria',
        lastName: 'Agustin',
        profile: 'avatars:svg-5'
      }
    ];
    $scope.goToMyLink = function(item, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Usuario')
          .content('Inspect ' + item)
          .ariaLabel('Perfil de Usuario')
          .ok('Neat!')
          .targetEvent(event)
        );
      };
      $scope.doSecondaryAction = function(event) {
         $mdDialog.show(
           $mdDialog.alert()
             .title('Secondary Action')
             .content('Secondary actions can be used for one click actions')
             .ariaLabel('Secondary click demo')
             .ok('Neat!')
             .targetEvent(event)
           );
    };
  }
