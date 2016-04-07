'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TodoSchema = new mongoose.Schema({
  task: String,
  creationDate: { type: Date, default: Date.now },
  dueDate: Date,
  isDone: { type: Boolean, default: false },
});

export default mongoose.model('Todo', TodoSchema);
