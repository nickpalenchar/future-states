'use strict';

angular.module('programmingWorkApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todo_noresolve', {
        url: '/todo_noresolve',
        templateUrl: 'app/todo_sample/todo_sample.html',
        controller: 'TodoNoresolveCtrl'
      });
  });
