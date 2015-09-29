
describe('StatusCtrl', function () {

  beforeEach(module('stlApp'));

  it('should have a function to get the mode', inject(function ($controller) {

    var scope = {}, ctrl = $controller('StatusCtrl', {$scope:scope});
    expect(angular.isFunction(scope.getMode)).toBe(true);
    expect(angular.isFunction(scope.getOrientation)).toBe(true);
  }));
});
