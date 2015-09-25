
describe('StlModes', function () {

  beforeEach(module('stlApp'));

  it('should have functions to get and set the mode', inject(
    function (stlModes) {
      expect(angular.isFunction(stlModes.getMode)).toBe(true);
      expect(angular.isFunction(stlModes.setMode)).toBe(true);
      expect(angular.isFunction(stlModes.setMenuMode)).toBe(true);
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

  it('should currectly identify the current mode with the helper functions', inject(
    function (stlModes) {

      stlModes.setMode(stlModes.modes.PAN, true);
      expect(stlModes.shouldPan()).toBe(true);
      expect(stlModes.shouldRotate()).toBe(false);
      expect(stlModes.shouldZoom()).toBe(false);

      stlModes.setMode(stlModes.modes.ZOOM, true);
      expect(stlModes.shouldPan()).toBe(false);
      expect(stlModes.shouldRotate()).toBe(false);
      expect(stlModes.shouldZoom()).toBe(true);

      stlModes.setMode(stlModes.modes.ROTATE, true);
      expect(stlModes.shouldPan()).toBe(false);
      expect(stlModes.shouldRotate()).toBe(true);
      expect(stlModes.shouldZoom()).toBe(false);
    }
  ));
});