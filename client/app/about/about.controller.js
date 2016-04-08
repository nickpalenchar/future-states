'use strict';

angular.module('programmingWorkApp')
  .controller('AboutCtrl', function ($scope, Us) {
    $scope.message = 'Hello';
    $scope.$on('timerReady', function () {
      $scope.timer = User.timer;
    })
  });
