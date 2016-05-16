/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUsuarios: function(callback) {
		Usuario.find().exec(function(err, arg) {
			if (err) throw err;
			callback(arg);
		});
	},
	addUsuario: function(arg, callback) {
		Usuario.create({
			nombre: arg.nombre,
			apellido: arg.apellido,
			fecha_nac:arg.fecha_nac,
			email: arg.email,
			url_imagen: arg.url_imagen,
			user: arg.user,
			password: arg.password,
			acerca_usuario: arg.acerca_usuario,
			municipio: arg.municipio,
			tipo_usuario: arg.tipo_usuario
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	},
	removeUsuario: function(arg, callback) {
		Usuario.destroy({
			id_usuario: arg
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	}
};
