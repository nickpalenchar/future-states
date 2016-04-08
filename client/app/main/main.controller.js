'use strict';

angular.module('programmingWorkApp')
  .controller('MainController', function ($http, User, $scope) {

    $scope.startTimer = function(){
      console.time('stateChange');
      window.begin = Date.now();
    };

    User.getTodos()
      .then(() => {
        this.awesomeThings = [{
          name: "All todos (1000)",
          info: "sample todos",
          sref: "all_todos",
          active: true,
        },{
          name: "Limited todos (50)",
          sref: "todo_noresolve",
          active: true,
        },{
          name: "Render the smallest state (1 character)",
          sref: "about",
          active: true,
        }];
        $('splash-screen').fadeOut();
      })
  });
