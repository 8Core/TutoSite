/**
 * Tipo_usuarioController
 *
 * @description :: Server-side logic for managing Tipo_usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTipo_usuarios: function(callback) {
		Tipo_usuario.find().exec(function(err, arg) {
			if (err) throw err;
			callback(arg);
		});
	},
	addTipo_usuarios: function(arg, callback) {
		Tipo_usuario.create({
			nombre_tipo: arg
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	},
	removeTipo_usuarios: function(arg, callback) {
		Tipo_usuario.destroy({
			id_tipo_usuario: arg
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	}
};
