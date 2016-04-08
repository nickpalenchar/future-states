'use strict';

angular.module('programmingWorkApp', ['programmingWorkApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ct.ui.router.extras']).config(function ($urlRouterProvider, $locationProvider, $futureStateProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  var todoState = {
    stateName: 'todoFuture',
    url: 'todo_future',
    type: 'todoState'
  };

  $futureStateProvider.stateFactory('todoState', function () {
    console.log("started future state factory");
    todoState.templateUrl = 'app/todo_sample/todo_sample.html';
    todoState.controller = 'TodoNoresolveCtrl';
    return todoState;
  });

  $futureStateProvider.stateFactory('deck', function ($q, User) {
    //TODO test after basic speed is assesed

    var d = $q.defer();
    var dataSet = User.dataSet;
    var template = "";
    dataSet.forEach(function (dataObj) {
      if (dataObj.type === 'listItem') {
        dataObj.items.forEach(function (item) {
          template += item.title ? '<h2>' + item.title + '</h2>' : '';
          template += item.body ? '<p>' + item.body + '</p>' : '';
        });
      }
      if (dataObj.type === 'img') {
        template += dataObj.src ? '<img src="' + dataObj.src + '"/>' : '';
        template += dataObj.caption ? '<h6>' + dataObj.caption + '</h6>' : '';
      }
    });

    d.resolve(template);

    return d.promise;
  });
});
//# sourceMappingURL=app.js.map
