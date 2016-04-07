'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Todo = require('../todo/todo.model');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  todoRefs: [{type: mongoose.Schema.ObjectId, ref: 'Todo'}],
  active: Boolean
});

UserSchema.statics.assignEverything = function(){
  Todo.find({})
    .then(todos => {
      this.todos = todos.map(todo => todo._id);
      this.markModified('todoRefs');
      return this.save();
    })
}

export default mongoose.model('User', UserSchema);
