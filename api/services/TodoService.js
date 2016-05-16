module.exports = {
  getTodos: function (callback) {
			Todo.find().exec(function (err, arg) {
					if (err) throw err;
					callback(arg);
			});
	},
	addTodo: function (arg, callback) {
			Todo.create({
					value: arg
			}).exec(function (err, val) {
					if (err) throw err;
					callback(val);
			});
	},
	removeTodo: function (arg, callback) {
			Todo.destroy({
					value: arg
			}).exec(function (err, val) {
					if (err) throw err;
					callback(val);
			});
	}
};
