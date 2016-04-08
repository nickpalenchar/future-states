'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var AgendaSchema = new mongoose.Schema({
  eventRef: { type: mongoose.Schema.ObjectId, ref: 'Event' }
});

exports['default'] = mongoose.model('Agenda', AgendaSchema);
module.exports = exports['default'];
//# sourceMappingURL=agenda.model.js.map
