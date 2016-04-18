'use strict';

var todoApp = angular.module('todoApp', [ 'ui.bootstrap', 'ui.router']);

todoApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/home', {
            url: '/home',
            templateUrl: 'templates/todo.html',
            controller: 'TodoCtrl'
        })

        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');

  }]);

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
  $scope.formData = {};
  $scope.todos = [];

  TodoService.getTodos().then(function(response) {
    $scope.todos = response;
  });

  $scope.addTodo = function() {
    TodoService.addTodo($scope.formData).then(function(response) {
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    });
  }

  $scope.removeTodo = function(todo) {
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
    });
  }
}]);
