
describe('StlLights', function () {

  beforeEach(module('stlApp'));

  it('should have a light1 and a light2 property',
    inject(function (stlLights) {

    expect(stlLights.light1).toBeDefined();
    expect(stlLights.light2).toBeDefined();
  }));
});