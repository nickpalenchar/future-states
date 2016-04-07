'use strict';

describe('Directive: SplashScreen', function () {

  // load the directive's module and view
  beforeEach(module('programmingWorkApp'));
  beforeEach(module('components/SplashScreen/SplashScreen.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-splash-screen></-splash-screen>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the SplashScreen directive');
  }));
});
