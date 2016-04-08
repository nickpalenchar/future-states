/**
 * Todo model events
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _events = require('events');

var Todo = require('./todo.model');
var TodoEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
TodoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Todo.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    TodoEvents.emit(event + ':' + doc._id, doc);
    TodoEvents.emit(event, doc);
  };
}

exports['default'] = TodoEvents;
module.exports = exports['default'];
//# sourceMappingURL=todo.events.js.map
