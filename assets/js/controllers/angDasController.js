(function () {
    /*
        Inicio Definición de Controlador
    */
    angular
        .module('app')
        .controller('DasCtrl', DasCtrl);

    //Inyección de dependencias
    DasCtrl.$inject =  ['$scope'];

    /*
        Fin Definción de Controlador
    */
    /**
     * Función que define el controlador utilizado en la vista templates/todo.html.
     * @param {object} $scope Define el entorno local del controlador para funciones y variables propias del entorno.
     */
    function DasCtrl($scope) {
        /* jshint validthis: true */
        var vm = this;

        //Variables

        //Funciones

        //Ejecuciones
        console.log('hola mundo DasCtrl');

        //Definiciones de funciones

    };
    /*
        Fin DasCtrl-----------------------------------------------------
    */
})();
