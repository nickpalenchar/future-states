'use strict';

angular.module('programmingWorkApp')
  .controller('TodoNoresolveCtrl', function ($scope, User, $rootScope) {
    $scope.todos = User.todos;
    $scope.itemCap = 50;
    $scope.loadMore = function () {
      $scope.itemCap += 50;
    };
    $scope.header = "These utelize ngRepeat's `limitTo` filter and a function to adjust the the limit at a bottom " +
      "button. This function could be used with anything (like, say, ngInfiniteScroll";

    $scope.$on('timerReady', function () {
      $scope.timer = User.timer;
    })
  });
