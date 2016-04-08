'use strict';

angular.module('programmingWorkApp')
  .controller('TodoNoresolveCtrl', function ($scope, User) {
    $scope.todos = User.todos;
    $scope.header = "These are the todos with no state resolve (front-loaded)";
  });
