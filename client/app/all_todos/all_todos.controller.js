'use strict';

angular.module('programmingWorkApp')
  .controller('AllTodosCtrl', function ($scope, User, $rootScope) {
    $scope.timer = User.timer;
    $scope.header = "All todos are rendered at once";
    $scope.todos = User.todos;
    $scope.itemCap = 1000;
    $scope.$on('timerReady', function(){
      $scope.timer = User.timer;
    })
  });
