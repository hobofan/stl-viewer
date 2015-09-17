
describe('StlOrient', function () {

  beforeEach(module('stlApp'));

  it('should have an orientations enumeration and an orient function',
    inject(function (stlOrient) {

    expect(stlOrient.orientations).toBeDefined();
    expect(stlOrient.orientations.FRONT).toBeDefined();
    expect(stlOrient.orientations.BACK).toBeDefined();
    expect(stlOrient.orientations.TOP).toBeDefined();
    expect(stlOrient.orientations.BOTTOM).toBeDefined();
    expect(stlOrient.orientations.LEFT).toBeDefined();
    expect(stlOrient.orientations.RIGHT).toBeDefined();
    expect(stlOrient.orientations.ISOMETRIC).toBeDefined();

    expect(angular.isFunction(stlOrient.orient)).toBe(true);
  }));
});
