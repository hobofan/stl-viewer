
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

  it('should have a orient function and a move function',
  	inject(function (stlCamera) {

    expect(angular.isFunction(stlCamera.orient)).toBe(true);
    expect(angular.isFunction(stlCamera.move)).toBe(true);
  }));
});
