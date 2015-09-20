
describe('StlSetOrientation', function () {

  beforeEach(module('stlApp'));

  it('should have a function to set the orientation', inject(

    function (stlSetOrientation) {
      expect(angular.isFunction(stlSetOrientation.set)).toBe(true);
  }));
});

