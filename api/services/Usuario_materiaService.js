/**
 * Usuario_materiaController
 *
 * @description :: Server-side logic for managing Usuario_materias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUsuario_materias: function(callback) {
		Usuario_materia.find().exec(function(err, arg) {
			if (err) throw err;
			callback(arg);
		});
	},
	addUsuario_materia: function(arg, callback) {
		Usuario_materia.create({
			usuario: arg.usuario,
			materia: arg.materia
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	},
	removeUsuario_materia: function(arg, callback) {
		Usuario_materia.destroy({
			id_usuario_materia: arg
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	}
};
