'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('testApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should include 7 items', function () {
    expect(scope.menuItems.length).toBe(7);
  });
});
