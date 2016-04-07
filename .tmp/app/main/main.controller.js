'use strict';

// (function () {
//
//   class MainController {
//
//     constructor($http) {
//       this.$http = $http;
//       this.awesomeThings = [{
//         name: "Sample Todos",
//         info: "sample todos",
//         sref: "todo_sample",
//         active: true,
//       }];
//       //
//       // $http.get('/api/things').then(response => {
//       //     this.awesomeThings = this.awesomeThings.concat(response.data);
//       // });
//     }
//
//     addThing() {
//       if (this.newThing) {
//         this.$http.post('/api/things', {name: this.newThing});
//         this.newThing = '';
//       }
//     }
//
//     deleteThing(thing) {
//       this.$http.delete('/api/things/' + thing._id);
//     }
//   }
//
//
//
//
//
// })();
//

angular.module('programmingWorkApp').controller('MainController', function ($http, User, $scope) {
  var _this = this;

  User.getTodos().then(function () {
    _this.awesomeThings = [{
      name: "Sample Todos",
      info: "sample todos",
      sref: "todo_sample",
      active: true
    }];
    $('splash-screen').fadeOut();
  });
});
//# sourceMappingURL=main.controller.js.map
