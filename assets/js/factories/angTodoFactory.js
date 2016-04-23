todoApp.factory('TodoFactory', function ($http, $q) {

    var comun = {};

    comun.getTodos = function () {
        var defer = $q.defer();
        $http.get('/todo/getTodos').success(function (resp) {
            defer.resolve(resp);
        }).error(function (err) {
            defer.reject(err);
        });
        return defer.promise;
    }

    comun.addTodo = function (todo) {
        var defer = $q.defer();
        $http.post('/todo/addTodo', todo).success(function (resp) {
            defer.resolve(resp);
        }).error(function (err) {
            defer.reject(err);
        });
        return defer.promise;
    }

    comun.removeTodo = function (todo) {
        var defer = $q.defer();
        $http.post('/todo/removeTodo', todo).success(function (resp) {
            defer.resolve(resp);
        }).error(function (err) {
            defer.reject(err);
        });
        return defer.promise;
    }
    return comun;
});
