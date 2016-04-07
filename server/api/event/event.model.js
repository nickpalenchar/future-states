'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

// goes with agenda
var EventSchema = new mongoose.Schema({
  name: String,
  info: String,
  month: Number,
  active: Boolean
});

export default mongoose.model('Event', EventSchema);
