
describe('StlMaterials', function () {

  beforeEach(module('stlApp'));

  it('should have a default material property',
    inject(function (stlMaterials) {

    expect(stlMaterials.defaultMaterial).toBeDefined();
  }));
});