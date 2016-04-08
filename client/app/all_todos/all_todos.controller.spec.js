'use strict';

describe('Controller: AllTodosCtrl', function () {

  // load the controller's module
  beforeEach(module('programmingWorkApp'));

  var AllTodosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllTodosCtrl = $controller('AllTodosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
