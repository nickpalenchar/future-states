'use strict';

angular.module('programmingWorkApp')
  .directive('splashScreen', function () {
    return {
      templateUrl: 'components/SplashScreen/SplashScreen.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
