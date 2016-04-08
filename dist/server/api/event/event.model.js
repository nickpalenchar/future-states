'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

// goes with agenda
var EventSchema = new mongoose.Schema({
  name: String,
  info: String,
  month: Number,
  active: Boolean
});

exports['default'] = mongoose.model('Event', EventSchema);
module.exports = exports['default'];
//# sourceMappingURL=event.model.js.map
