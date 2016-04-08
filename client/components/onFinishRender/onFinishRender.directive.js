'use strict';

angular.module('programmingWorkApp')
  .directive('onFinishRender', function ($timeout, User, $rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if(scope.$last){
          $timeout(() => {
            console.timeEnd('stateChange');
            User.timer = Date.now() - window.begin;
            console.log('UOEU', User.timer);
            $rootScope.$broadcast('timerReady');
          },0);
        }
      }
    };
  });
