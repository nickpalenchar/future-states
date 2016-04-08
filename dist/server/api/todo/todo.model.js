'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TodoSchema = new mongoose.Schema({
  task: String,
  creationDate: { type: Date, 'default': Date.now },
  dueDate: Date,
  isDone: { type: Boolean, 'default': false }
});

exports['default'] = mongoose.model('Todo', TodoSchema);
module.exports = exports['default'];
//# sourceMappingURL=todo.model.js.map
