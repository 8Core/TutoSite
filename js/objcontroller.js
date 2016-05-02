app.controller('objcontroller', ['$scope',function($scope)
    {
      $scope.cursos=[
        {
          name: 'Quimica General',
          descripcion: 'Isotopos, tablas periodicas, elementos entre otros',
          resultado: '6 resultados cerca de ti',
          avatar: 'images/mate.png'
        },
        {
          name: 'Matematica Basica',
          descripcion: 'Funciones cuadraticas, lineales, cubicas, areas',
          resultado: '6 resultados cerca de ti',
          avatar: 'images/mate.png'
        },
        {
          name: 'Matematica Intermedia',
          descripcion: 'Areas mas completas',
          resultado: '6 resultados cerca de ti',
          avatar: 'images/mate.png'
        },
        {
          name: 'Estadistica basica',
          descripcion: 'Combinaciones y Permutaciones',
          resultado: '6 resultados cerca de ti',
          avatar: 'images/mate.png'
        },
        {
          name: 'Redes de computadoras',
          descripcion: 'Router, Switch, Host',
          resultado: '6 resultados cerca de ti',
          avatar: 'images/mate.png'
        }
      ];


      $scope.usuarios=[
        {
          name: 'Francisco Ardon',
          descripcion: 'Basica',
          resultado: 'Q10 la hora',
          avatar: '../images/photo.png'
        },
        {
          name: 'Jose Estrada',
          descripcion: 'Media',
          resultado: 'Q20 la hora',
          avatar: '../images/photo.png'
        },
        {
          name: 'Jeyson Montenegro',
          descripcion: 'Alta',
          resultado: 'Q30 la hora',
          avatar: '../images/photo.png'
        },
        {
          name: 'Jeremias Ortega',
          descripcion: 'Muy alta',
          resultado: 'Q40 la hora',
          avatar: '../images/photo.png'
        },
        {
          name: 'Kenneth Ubeda',
          descripcion: 'Experto',
          resultado: 'Q50 la hora',
          avatar: '../images/photo.png'
        },
        {
          name: 'Eiji de Paz',
          descripcion: 'Experto',
          resultado: 'Q50 la hora',
          avatar: '../images/photo.png'
        }
      ];


    }])
