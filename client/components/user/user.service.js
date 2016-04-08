'use strict';

angular.module('programmingWorkApp')
  .factory('User', function ($http) {
    // Service logic
    // ...
    let User = {
      dataSet: [],
      setDataSet: function(setName){
        User.dataSet = User[setName] || [];
      },
      timer: -1,
    };

    User.getTodos = function(){
      return $http.get('/api/todos')
        .then(res => {
          User.todos = res.data;
        });
    };

    return User;
  });
