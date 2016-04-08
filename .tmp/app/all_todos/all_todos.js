'use strict';

angular.module('programmingWorkApp').config(function ($stateProvider) {
  $stateProvider.state('all_todos', {
    url: '/all_todos',
    templateUrl: 'app/todo_sample/todo_sample.html',
    controller: 'AllTodosCtrl'
  });
});
//# sourceMappingURL=all_todos.js.map
