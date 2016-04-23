/*
    Inicio HomeCtrl-----------------------------------------------------
    Descripción: controlador utilizado para el manejo de información en la vista principal
    conocida como home.html
*/
todoApp.controller('HomeCtrl', ['$scope', '$rootScope', 'TodoService', function ($scope, $rootScope, TodoService) {

    $scope.formData = {};
    $scope.todos = [];

    TodoService.getTodos().then(function (response) {
        $scope.todos = response;
    });

    $scope.addTodo = function () {
        TodoService.addTodo($scope.formData).then(function (response) {
            $scope.todos.push($scope.formData)
            $scope.formData = {};
        });
    }

    $scope.removeTodo = function (todo) {
        TodoService.removeTodo(todo).then(function (response) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1)
        });
    }

 }]);
/*
    Fin HomeCtrl-----------------------------------------------------
*/
/*
    Inicio DasCtrl-----------------------------------------------------
    Descripción: Sin funcionalidad básica
*/
todoApp.controller('DasCtrl', ['$scope', function ($scope) {
    $scope.formData = {};
    $scope.todos = [];
    console.log('hola mundo DasCtrl');
 }]);
/*
    Fin DasCtrl-----------------------------------------------------
*/
