
describe('StlCamera', function () {

  beforeEach(module('stlApp'));

  it('should have a camera property',
  	inject(function (stlCamera) {

    expect(stlCamera.camera).toBeDefined();
  }));

  it('should have functions to set the size and update the camera',
  	inject(function (stlCamera) {

    expect(angular.isFunction(stlCamera.update)).toBe(true);
    expect(angular.isFunction(stlCamera.resize)).toBe(true);
  }));

  it('should have a orient function and mouse handling functions',
  	inject(function (stlCamera) {

    expect(angular.isFunction(stlCamera.orient)).toBe(true);
    expect(angular.isFunction(stlCamera.mouseDown)).toBe(true);
    expect(angular.isFunction(stlCamera.mouseMove)).toBe(true);
    expect(angular.isFunction(stlCamera.mouseUp)).toBe(true);
  }));
});
