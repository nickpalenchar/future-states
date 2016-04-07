'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var AgendaSchema = new mongoose.Schema({
  eventRef: { type: mongoose.Schema.ObjectId, ref: 'Event'}
});

export default mongoose.model('Agenda', AgendaSchema);
