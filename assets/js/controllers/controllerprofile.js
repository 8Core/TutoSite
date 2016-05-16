
todoApp.controller('ProfileCtrl', ProfileCtrl);

  //  ProfileCtrl.$inject = ['ngMaterial'];

    function ProfileCtrl() {
      var vm=this;
      vm.about = {
        icon: "http://optimacy.org/wp-content/uploads/2010/09/smiling-woman.jpg",
        nombre: "Graciela Zolorzano",
        origen: "Guatemala",
        ingreso: "1/10/2015",
        genero: "Femenino",
        edad: "22",
        educacion: [{
          institucion: "USAC",
          estudio: "Ingeniera en Ciencias y Sistemas"
        }, {
          institucion: "USAC",
          estudio: "Ingles nivel 16"
        }, {
          institucion: "INTECAP",
          estudio: "Curso de Redes Cisco"
        }, {
          institucion: "UniMooc",
          estudio: "Curso Lean Startup"
        }],
        comentarios: [{
          id: "0000",
          icon: "http://facefacts.scot/images/people/ben_jones",
          usr: "Jose Perez",
          msg: "Excelente",
          date: "10/10/2015",
          value: "5"
        }, {
          id: "1000",
          icon: "http://www.abc.com.py/files/image/195/195185/4d39f7f7a25b5.jpg",
          usr: "Manuel Perez",
          msg: "Ensenio Magnificamente",
          date: "10/10/2015",
          value: "4.5"
        }, {
          id: "2000",
          icon: "http://facefacts.scot/images/people/ben_jones",
          usr: "Jose Tom",
          msg: "Recomendadisimo muy bueno",
          date: "10/10/2015",
          value: "5"
        }, {
          id: "4000",
          icon: "http://www.abc.com.py/files/image/195/195185/4d39f7f7a25b5.jpg",
          usr: "Jose Valenzuela",
          msg: "Muy bueno ensenio lo que necesitaba",
          date: "10/10/2015",
          value: "5"
        }, {
          id: "3000",
          icon: "http://facefacts.scot/images/people/ben_jones",
          usr: "Julia Perez",
          msg: "Un poco Inpuntual llego a los 20 m. de la reunion",
          date: "10/10/2015",
          value: "3"
        }, ]
      };
    }
