/**
 * DepartamentoController
 *
 * @description :: Server-side logic for managing Departamentoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getDepartamentos: function (callback) {
			Departamento.find().exec(function (err, arg) {
					if (err) throw err;
					callback(arg);
			});
	},
	addDepartamento: function (arg, callback) {
			Departamento.create({
					nombre_departamento: arg
			}).exec(function (err, val) {
					if (err) throw err;
					callback(val);
			});
	},
	removeDepartamento: function (arg, callback) {
			Departamento.destroy({
					id_departamento: arg
			}).exec(function (err, val) {
					if (err) throw err;
					callback(val);
			});
	}
};
