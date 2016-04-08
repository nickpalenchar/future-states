'use strict';

angular.module('programmingWorkApp').controller('TodoSampleCtrl', function ($scope, todos, User) {
  $scope.header = 'These are the resolved todos';
  $scope.todos = todos;
  $scope.timer = User.timer;
});
//# sourceMappingURL=todo_sample.controller.js.map
