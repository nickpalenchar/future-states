/**
 * Agenda model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Agenda = require('./agenda.model');
var AgendaEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
AgendaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Agenda.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    AgendaEvents.emit(event + ':' + doc._id, doc);
    AgendaEvents.emit(event, doc);
  };
}

exports['default'] = AgendaEvents;
module.exports = exports['default'];
//# sourceMappingURL=agenda.events.js.map
