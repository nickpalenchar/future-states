'use strict';

angular.module('programmingWorkApp').config(function ($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'app/about/about.html',
    controller: 'AboutCtrl'
  });
});
//# sourceMappingURL=about.js.map
