/*
    Inicio HomeCtrl-----------------------------------------------------
    Descripción: controlador utilizado para el manejo de información en la vista principal
    conocida como home.html
*/
todoApp.controller('HomeCtrl', ['$scope', '$rootScope', 'TodoFactory', function ($scope, $rootScope, TodoFactory) {

    $scope.formData = {};
    $scope.todos = [];

    TodoFactory.getTodos().then(function (response) {
        $scope.todos = response;
    });

    $scope.addTodo = function () {
        TodoFactory.addTodo($scope.formData).then(function (response) {
            $scope.todos.push($scope.formData)
            $scope.formData = {};
        });
    }

    $scope.removeTodo = function (todo) {
        TodoFactory.removeTodo(todo).then(function (response) {
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
