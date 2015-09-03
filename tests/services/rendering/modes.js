
describe('StlModes', function () {

  beforeEach(module('stlApp'));

  it('should have functions to get and set the mode', inject(
    function (stlModes) {
      expect(angular.isFunction(stlModes.getMode)).toBe(true);
      expect(angular.isFunction(stlModes.setMode)).toBe(true);
    }
  ));
});