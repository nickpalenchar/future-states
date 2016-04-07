'use strict';

angular.module('programmingWorkApp')
  .factory('User', function ($http) {
    // Service logic
    // ...
    let User = {};
    User.getTodos = function(){
      return $http.get('/api/todos')
        .then(res => {
          console.log('got the thing');
          User.todos = res.data;
        });
    };

    return User;
  });
