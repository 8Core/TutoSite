
  todoApp.controller('registerController', dateController)
    .directive('validPasswordC',validPasswordC);

  function dateController($q, $scope, $timeout) {
    var self = this;
    self.user = {

    };
    self.keys = [186, 186];
    self.tabs = {
      tab1: true,
      tab2: true,
      tab3: true
    };
    $scope.validate = function(user) {
      console.log(user);
    };
    self.readonly = false;
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.areasKnowledge = loadAreasKnowledge();
    self.selectedAreasKnowledge = [];
    self.numberChips = [];
    self.numberChips2 = [];
    self.numberBuffer = '';
    self.autocompleteDemoRequireMatch = false;
    self.transformChip = transformChip;
    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }
      // Otherwise, create a new one
      return {
        name: chip,
        type: 'new'
      }
    }
    /**
     * Search for vegetables.
     */
    function querySearch(query) {
      var results = query ? self.areasKnowledge.filter(createFilterFor(query)) : [];
      return results;
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(vegetable) {
        return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
          (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
      };
    }

    function loadAreasKnowledge() {
      var veggies = [{
        'name': 'Computacion',
        'type': 'Tecnologia'
      }, {
        'name': 'Programacion',
        'type': 'Tecnologia'
      }, {
        'name': 'Electronica',
        'type': 'Tecnologia'
      }, {
        'name': 'Repello',
        'type': 'Construccion'
      }, {
        'name': 'Sernido',
        'type': 'Construccion'
      }];
      return veggies.map(function(veg) {
        veg._lowername = veg.name.toLowerCase();
        veg._lowertype = veg.type.toLowerCase();
        return veg;
      });
    }
  }

  function validPasswordC() {
  return {
    require: 'ngModel',
    scope: {

      reference: '=validPasswordC'

    },
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue, $scope) {

        var noMatch = viewValue != scope.reference
        ctrl.$setValidity('noMatch', !noMatch);
        return (noMatch)?noMatch:!noMatch;
      });

      scope.$watch("reference", function(value) {;
        ctrl.$setValidity('noMatch', value === ctrl.$viewValue);

      });
    }
  }
}
