'use strict';

angular.module('programmingWorkApp').factory('User', function ($http) {
  // Service logic
  // ...
  var User = {};
  User.getTodos = function () {
    return $http.get('/api/todos').then(function (res) {
      console.log('got the thing');
      User.todos = res.data;
    });
  };

  return User;
});
//# sourceMappingURL=user.service.js.map
