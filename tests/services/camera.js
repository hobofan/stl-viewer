
describe('StlCamera', function () {

  beforeEach(module('stlApp'));

  it('should have a camera property and an update function',
  	inject(function (stlCamera) {

    expect(stlCamera.camera).toBeDefined();
    expect(angular.isFunction(stlCamera.update)).toBe(true);
  }));

  it('should have a modes enum and functions to get and set the mode',
  	inject(function (stlCamera) {

		expect(stlCamera.modes).toBeDefined();
    expect(angular.isFunction(stlCamera.setMode)).toBe(true);
    expect(angular.isFunction(stlCamera.getMode)).toBe(true);
  }));

  it('should return the mode that was set earlier',
  	inject(function (stlCamera) {

		stlCamera.setMode(stlCamera.modes.PAN);
    expect(stlCamera.getMode()).toEqual(stlCamera.modes.PAN);
  }));

  it('should set the mode to rotate by default',
  	inject(function (stlCamera) {

    expect(stlCamera.getMode()).toEqual(stlCamera.modes.ROTATE);
  }));
});
