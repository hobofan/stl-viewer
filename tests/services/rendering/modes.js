
describe('StlModes', function () {

  beforeEach(module('stlApp'));

  it('should have functions to get and set the mode', inject(
    function (stlModes) {
      expect(angular.isFunction(stlModes.getMode)).toBe(true);
      expect(angular.isFunction(stlModes.setMode)).toBe(true);
    }
  ));

  it('should return the mode that was set earlier', inject(
    function (stlModes) {

      stlModes.setMode(stlModes.modes.PAN);
      expect(stlModes.getMode()).toEqual(stlModes.modes.PAN);
    }
  ));

  it('should return the rotate mode by default', inject(
    function (stlModes) {

      expect(stlModes.getMode()).toEqual(stlModes.modes.ROTATE);
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

  it('should not allow setting of an unsupported mode', inject(
    function (stlModes) {

      stlModes.setMode(stlModes.modes.PAN);
      stlModes.setMode("invalid");
      expect(stlModes.getMode()).toEqual(stlModes.modes.PAN);
    }
  ));

  it('should have helper functions to check for the current mode type', inject(
    function (stlModes) {
      expect(angular.isFunction(stlModes.shouldRotate)).toBe(true);
      expect(angular.isFunction(stlModes.shouldPan)).toBe(true);
      expect(angular.isFunction(stlModes.shouldZoom)).toBe(true);
    }
  ));
});