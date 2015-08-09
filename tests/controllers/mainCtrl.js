
describe('MainCtrl', function () {

  beforeEach(module('stlApp'));

  it('should do something', inject(function ($controller) {

    var scope = {}, ctrl = $controller('MainCtrl', {$scope:scope});

    expect(scope.str).toBeDefined();
  }));
});
