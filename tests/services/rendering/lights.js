
describe('StlLights', function () {

  beforeEach(module('stlApp'));

  it('should have functions to get the two lights',
    inject(function (stlLights) {

    expect(angular.isFunction(stlLights.getFirstLight)).toBe(true);
    expect(angular.isFunction(stlLights.getSecondLight)).toBe(true);
  }));

  it('should light properties of the correct type',
    inject(function (stlLights) {

    expect(stlLights.getFirstLight() instanceof THREE.DirectionalLight).toBe(true);
    expect(stlLights.getSecondLight() instanceof THREE.DirectionalLight).toBe(true);
  }));

  it('should have an update function',
    inject(function (stlLights) {

    expect(angular.isFunction(stlLights.update)).toBe(true);
  }));
});