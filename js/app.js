
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
    // route to show our basic form (/form)
      .state('register', {
      url: '/register',
      templateUrl: '../views/register.html',
      controller: 'formController'
    })

    // nested states
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('register.loginDetails', {
      url: '/loginDetails',
      templateUrl: '../views/loginDetails.html'
    })

    // url will be /form/interests
    .state('register.areasKnowledge', {
      url: '/areasKnowledge',
      templateUrl: '../views/areasKnowledge.html'
    })

    // url will be /form/payment
    .state('register.personalDetails', {
      url: '/personalDetails',
      templateUrl: '../views/personalDetails.html'
    });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };

});
