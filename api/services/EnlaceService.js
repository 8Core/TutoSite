/**
 * EnlaceController
 *
 * @description :: Server-side logic for managing Enlaces
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getEnlaces: function(callback) {
		Enlace.find().exec(function(err, arg) {
			if (err) throw err;
			callback(arg);
		});
	},
	addEnlace: function(arg, callback) {
		Enlace.create({
			usuario1: arg.usuario1,
			usuario2: arg.usuario2
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	},
	removeEnlace: function(arg, callback) {
		Enlace.destroy({
			id_enlace: arg
		}).exec(function(err, val) {
			if (err) throw err;
			callback(val);
		});
	}
};
