
describe('StlModes', function () {

  beforeEach(module('stlApp'));

  it('should have functions to get and set the mode', inject(
    function (stlModes) {
      expect(angular.isFunction(stlModes.getMode)).toBe(true);
      expect(angular.isFunction(stlModes.setMode)).toBe(true);
    }
  ));

  it('should have a modes property with the various modes defined', inject(
    function (stlModes) {
      expect(stlModes.modes).toBeDefined();
      expect(stlModes.modes.ROTATE).toBeDefined();
      expect(stlModes.modes.PAN).toBeDefined();
      expect(stlModes.modes.ZOOM).toBeDefined();
    }
  ));
});