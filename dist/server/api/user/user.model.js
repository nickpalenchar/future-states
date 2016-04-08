'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Todo = require('../todo/todo.model');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  todoRefs: [{ type: mongoose.Schema.ObjectId, ref: 'Todo' }],
  active: Boolean
});

UserSchema.statics.assignEverything = function () {
  var _this = this;

  Todo.find({}).then(function (todos) {
    _this.todos = todos.map(function (todo) {
      return todo._id;
    });
    _this.markModified('todoRefs');
    return _this.save();
  });
};

exports['default'] = mongoose.model('User', UserSchema);
module.exports = exports['default'];
//# sourceMappingURL=user.model.js.map
