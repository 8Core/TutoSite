'use strict';

var todoApp = angular.module('todoApp', ['ui.bootstrap', 'ui.router']);

todoApp.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', function ($stateProvider, $httpProvider, $urlRouterProvider) {
    
    $httpProvider.defaults.headers.post['Content-Type'] = "application/json";
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })
        .state('das', {
            url: '/das',
            templateUrl: 'templates/todo.html',
            controller: 'DasCtrl'
        })

    // Redirecciones por defecto ante rutas en blanco o rutas queno estén definidas
    $urlRouterProvider.when('', 'home');
    $urlRouterProvider.otherwise('home');

  }]);