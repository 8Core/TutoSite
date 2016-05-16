/**
 * MunicipioController
 *
 * @description :: Server-side logic for managing Municipios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getMunicipios: function (callback) {
			Municipio.find().exec(function (err, arg) {
					if (err) throw err;
					callback(arg);
			});
	},
	addMunicipio: function (arg, callback) {
			Municipio.create({
					nombre_municipio: arg.nombre_municipio,
					departamento: arg.departamento
			}).exec(function (err, val) {
					if (err) throw err;
					callback(val);
			});
	},
	removeDepartamento: function (arg, callback) {
			Municipio.destroy({
					id_municipio: arg
			}).exec(function (err, val) {
					if (err) throw err;
					callback(val);
			});
	}
};
