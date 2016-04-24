(function () {
    /*
        Inicio Definición de Factories
    */
    angular
        .module('app')
        .factory('todoFactory', todoFactory);

    //Inyección de dependencias
    todoFactory.$inject = ['$http', '$q', '$log'];
    /*
        Fin Definición de Factories
    */
    /**
     * Función que provee funciones para consultar, agregar y eliminar 'Todo's, mediante peticiones HTTP al servidor.
     * @param   {object}   $http Permite utilizar acciones HTTP y utilizar el estilo REST con sus respectivos verbos.
     * @param   {object}   $q    Permite definir una promesa para el retorno de contenido ante una petición REST.
     * @returns {object}   comun Objeto que devuelve todas las funciones y variables que son reutilizables.
     */
    function todoFactory($http, $q, $log) {
        var service = {
            //variables
            //funciones
            getTodos: getTodos,
            addTodo: addTodo,
            removeTodo: removeTodo,
            //log
            log: $log
        };
        ///////////////
        return service;
        /**
         * Función que consulta todos los registros del modelo Todo y los retorna en formato JSON.
         * @returns {function} Promesa que resuleve o rechaza el contenido a devolver por la petición.
         */
        function getTodos() {
            var defer = $q.defer();

            $http.get('/todo/getTodos')
                .success(getTodosSuccess)
                .error(getTodosError);

            function getTodosSuccess(res, status, headers, config){
                return defer.resolve(res);
            }

            function getTodosError(error){
                $log.error('Error: ' + error);
                return defer.reject(error);
            }

            return defer.promise;
        }
        /**
         * Función que envía un objeto Todo para se agregado al respectivo modelo en el servidor.
         * @param   {object}   todo Objeto compuesto de un String llamado tipo y un id de tipo Int.
         * @returns {function} Promesa que resuleve o rechaza el contenido a devolver por la petición.
         */
        function addTodo(todo) {
            var defer = $q.defer();

            $http.post('/todo/addTodo', todo)
                .success(addTodoSuccess)
                .error(addTodoError);

            function addTodoSuccess(res, status, headers, config){
                return defer.resolve(res);
            }

            function addTodoError(error){
                $log.error('Error: ' + error);
                return defer.reject(error);
            }

            return defer.promise;
        }
        /**
         * Función que envía un objeto Todo a ser eliminado en su respectivo modelo en el servidor.
         * @param   {object} todo Objeto compuesto de un String llamado tipo y un id de tipo Int.
         * @returns {function} Promesa que resuleve o rechaza el contenido a devolver por la petición.
         */
        function removeTodo(todo) {
            var defer = $q.defer();

            $http.post('/todo/removeTodo', todo)
                .success(removeTodoSuccess)
                .error(removeTodoError);

            function removeTodoSuccess(res, status, headers, config){
                return defer.resolve(res);
            }

            function removeTodoError(error){
                $log.error('Error: ' + error);
                return defer.reject(error);
            }

            return defer.promise;
        }
    };
    /*
        Fin TodoFactory-----------------------------------------------------
    */
})();
