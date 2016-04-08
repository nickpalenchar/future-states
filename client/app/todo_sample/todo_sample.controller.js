'use strict';

angular.module('programmingWorkApp')
    .controller('TodoSampleCtrl', function ($scope, todos) {
        $scope.header = 'These are the resolved todos';

        $scope.todos = todos;

    });
