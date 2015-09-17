
describe('StlOrient', function () {

  beforeEach(module('stlApp'));

  it('should have an orientations enumeration and an orient function',
    inject(function (stlOrient) {

    expect(stlOrient.orientations).toBeDefined();
    expect(angular.isFunction(stlOrient.orient)).toBe(true);
  }));
});
