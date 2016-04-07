'use strict';

angular.module('programmingWorkApp')
    .controller('TodoSampleCtrl', function ($scope, todos) {
        $scope.message = 'Hello';

        $scope.todos = todos;

    });
