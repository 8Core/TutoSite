/**
 * Area_academicaController
 *
 * @description :: Server-side logic for managing Area_academicas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getArea_academicas: function (req, res) {
			Area_academicaService.getArea_academica(function (todos) {
					res.json(todos);
			});
	},
	addArea_academica: function (req, res) {
			var todoVal = (req.body.value) ? req.body.value : undefined
			Area_academicaService.addArea_academica(todoVal, function (success) {
					res.json(success);
			});
	},
	removeTodo: function (req, res) {
			var todoVal = (req.body.value) ? req.body.value : undefined
			Area_academicaService.removeArea_academica(todoVal, function (success) {
					res.json(success);
			});
	}
};
