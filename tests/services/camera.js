
describe('StlCamera', function () {

  beforeEach(module('stlApp'));

  it('should have a camera property', inject(function (stlCamera) {
    expect(stlCamera.camera).toBeDefined();
  }));
});
