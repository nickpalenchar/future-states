'use strict';

describe('Controller: TodoSampleCtrl', function () {

  // load the controller's module
  beforeEach(module('programmingWorkApp'));

  var TodoSampleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoSampleCtrl = $controller('TodoSampleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
