
describe('StlLights', function () {

  beforeEach(module('stlApp'));

  it('should have a light1 and a light2 property',
    inject(function (stlLights) {

    expect(stlLights.light1).toBeDefined();
    expect(stlLights.light2).toBeDefined();
  }));

  it('should light properties of the correct type',
    inject(function (stlLights) {

    expect(stlLights.light1 instanceof THREE.DirectionalLight).toBe(true);
    expect(stlLights.light2 instanceof THREE.DirectionalLight).toBe(true);
  }));

  it('should have an update function',
    inject(function (stlLights) {

    expect(angular.isFunction(stlLights.update)).toBe(true);
  }));
});