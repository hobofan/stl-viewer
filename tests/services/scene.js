
describe('StlScene', function () {

  beforeEach(module('stlApp'));

  it('should have a scene property of the correct type', inject(function (stlScene) {
    expect(stlScene.scene).toBeDefined();
    expect(stlScene.scene instanceof THREE.Scene).toBeDefined();
  }));

  it('should have an add and a remove function', inject(function (stlScene) {
    expect(angular.isFunction(stlScene.add)).toBe(true);
    expect(angular.isFunction(stlScene.remove)).toBe(true);
  }));

  it('should have a function to get the bounding box', inject(function (stlScene) {
    expect(angular.isFunction(stlScene.getBox)).toBe(true);
  }));
});
