
describe('StlRenderer', function () {

  beforeEach(module('stlApp'));

  it('should have init, render and resize functions', inject(function (stlRenderer) {

    expect(angular.isFunction(stlRenderer.init)).toBe(true);
    expect(angular.isFunction(stlRenderer.render)).toBe(true);
    expect(angular.isFunction(stlRenderer.resize)).toBe(true);
  }));
});
