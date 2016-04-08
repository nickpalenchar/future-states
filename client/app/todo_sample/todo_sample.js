'use strict';

angular.module('programmingWorkApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todo_sample', {
        url: '/todo_sample',
        templateUrl: 'app/todo_sample/todo_sample.html',
        controller: 'TodoSampleCtrl',
        resolve: {
          todos: function(User){
            return User.todos;
          }
        }

      });
  });
