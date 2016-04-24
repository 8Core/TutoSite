(function () {
    /*
        Inicio Definición de Controlador
    */
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    //Inyección de dependencias
    HomeCtrl.$inject = ['$scope', 'todoFactory'];

    /*
        Fin Definción de Controlador
    */
    /**
     * Función que define el controlador utilizado en la vista templates/home.html
     * @param {object}   $scope      Define el entorno local del controlador para funciones y variables propias del entorno.
     * @param {object}   $rootScope  Define un entorno raíz que es compartido por todos los controladores.
     * @param {function} TodoFactory Factory que provee servicios para gestion de 'Todo's.
     */
    function HomeCtrl($scope, todoFactory) {
        /* jshint validthis: true */
        var vm = this;

        //Variables
        vm.formData = {};
        vm.todos = [];

        //Funciones
        vm.addTodo = addTodo;
        vm.removeTodo = removeTodo;

        //Ejecuciones
        activate();

        //Definiciones de funciones
        /**
         * Función de ejecución inicial para consultar los objetos Todo.
         * @returns {function} Función que invoca al servicio de petición de objetos Todo.
         */
        function activate() {
            return getTodos().then(function () {
                console.log('Activación de vista Home');
            });

        }
        /**
         * Función que utiliza el servicio de consulta hacia el servidor.
         * @returns {function} Promesa con la información obtenida.
         */
        function getTodos() {
            return todoFactory.getTodos().then(function (response) {
                vm.todos = response;
            });
        }
        /**
         * Función que envía un objeto Todo, a TodoFactory para agregarlo al servidor.
         */
        function addTodo() {
            return todoFactory.addTodo(vm.formData).then(function (response) {
                vm.todos.push(vm.formData)
                vm.formData = {};

                return vm.todos;
            });
        }
        /**
         * Función que envía un objeto Todo a TodoFactory para eliminarlo del servidor.
         * @param {object} todo Objeto compuesto de un String llamado tipo y un id de tipo Int.
         */
        function removeTodo(todo) {
            return todoFactory.removeTodo(todo).then(function (response) {
                vm.todos.splice(vm.todos.indexOf(todo), 1);

                return vm.todos;
            });
        }

    }
    /*
        Fin HomeCtrl-----------------------------------------------------
    */
})();
