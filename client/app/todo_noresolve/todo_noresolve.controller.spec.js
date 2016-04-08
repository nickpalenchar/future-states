'use strict';

describe('Controller: TodoNoresolveCtrl', function () {

  // load the controller's module
  beforeEach(module('programmingWorkApp'));

  var TodoNoresolveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoNoresolveCtrl = $controller('TodoNoresolveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
