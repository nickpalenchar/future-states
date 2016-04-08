'use strict';

angular.module('programmingWorkApp').factory('User', function ($http) {
  // Service logic
  // ...
  var User = {
    dataSet: [],
    setDataSet: function setDataSet(setName) {
      User.dataSet = User[setName] || [];
    },
    timer: -1
  };

  User.getTodos = function () {
    return $http.get('/api/todos').then(function (res) {
      User.todos = res.data;
    });
  };

  return User;
});
//# sourceMappingURL=user.service.js.map
