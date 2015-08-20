
describe('StlCamera', function () {

  beforeEach(module('stlApp'));

  it('should have a camera property and an update function',
  	inject(function (stlCamera) {

    expect(stlCamera.camera).toBeDefined();
    expect(angular.isFunction(stlCamera.update)).toBe(true);
  }));
});
