(function () {

    angular
        .module('app.routes', [])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', AppRoutes]);


    /**
     * Función para la definición de estados y rutas de navegación entre vistas
     * vinculación vista-controlador por ruta
     * @param {object} $stateProvider     Permite definir estados con parámetros como rutas, vistas y controladores asociados.
     * @param {object} $urlRouterProvider Provee funciones para redirigir rutas ante un evento específico.
     * @param {object} $httpProvider      Define el tipo contenido de las cabeceras
     */
    function AppRoutes($stateProvider, $urlRouterProvider, $httpProvider) {

        // pretty Angular URLs
        //$locationProvider.html5Mode(true);

        $httpProvider.defaults.headers.post['Content-Type'] = "application/json";

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl as vm'
            })
            .state('das', {
                url: '/das',
                templateUrl: 'templates/todo.html',
                controller: 'DasCtrl as vm'
            })

        // Redirecciones por defecto ante rutas en blanco o rutas que no estén definidas
        $urlRouterProvider.when('', 'home');
        $urlRouterProvider.otherwise('home');
    }

})();
