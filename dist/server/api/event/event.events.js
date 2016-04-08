/**
 * Event model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Event = require('./event.model');
var EventEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
EventEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Event.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    EventEvents.emit(event + ':' + doc._id, doc);
    EventEvents.emit(event, doc);
  };
}

exports['default'] = EventEvents;
module.exports = exports['default'];
//# sourceMappingURL=event.events.js.map
