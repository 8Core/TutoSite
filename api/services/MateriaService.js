/**
 * MateriaController
 *
 * @description :: Server-side logic for managing Materias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getMaterias: function(callback) {
		Materia.find().exec(function(err, arg) {
			if (err) throw err;
			callback(arg);
		});
	},
	addMateria: function(arg, callback) {
		Materia.create({
			description_materia: arg.description_materia,
			area_academica: arg.area_academica
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	},
	removeMateria: function(arg, callback) {
		Materia.destroy({
			id_materia: arg
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	}
};
