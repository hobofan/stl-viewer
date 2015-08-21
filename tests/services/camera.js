
describe('StlCamera', function () {

  beforeEach(module('stlApp'));

  it('should have a camera property and an update function',
  	inject(function (stlCamera) {

    expect(stlCamera.camera).toBeDefined();
    expect(angular.isFunction(stlCamera.update)).toBe(true);
  }));

  it('should have a modes enum and functions to set the mode',
  	inject(function (stlCamera) {

		expect(stlCamera.modes).toBeDefined();
    expect(angular.isFunction(stlCamera.setMode)).toBe(true);
  }));

  it('should have a rotate function',
  	inject(function (stlCamera) {

    expect(angular.isFunction(stlCamera.rotate)).toBe(true);
  }));
});
