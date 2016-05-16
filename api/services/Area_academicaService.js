/**
 * Area_academicaController
 *
 * @description :: Server-side logic for managing Area_academicas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getArea_academicas: function(callback) {
    Area_academica.find().exec(function(err, arg) {
      if (err) throw err;
      callback(arg);
    });
  },
  addArea_academica: function(arg, callback) {
    Area_academica.create({
			descripcion_area: arg
    }).exec(function(err, val) {
      if (err) throw err;
      callback(val);
    });
  },
  removeArea_academica: function(arg, callback) {
    Area_academica.destroy({
      id_area_academica: arg
    }).exec(function(err, val) {
      if (err) throw err;
      callback(val);
    });
  }
};
