
describe('StlMaterials', function () {

  beforeEach(module('stlApp'));

  it('should have a default material property',
    inject(function (stlMaterials) {

    expect(stlMaterials.defaultMaterial).toBeDefined();
    expect(stlMaterials.defaultLineMaterial).toBeDefined();
  }));

  it('should have materials of the correct types',
    inject(function (stlMaterials) {

    expect(stlMaterials.defaultMaterial instanceof
      THREE.MeshLambertMaterial).toBe(true);
    expect(stlMaterials.defaultLineMaterial instanceof
      THREE.LineBasicMaterial).toBe(true);
  }));
});