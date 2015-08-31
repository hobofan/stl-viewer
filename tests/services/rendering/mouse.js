
describe('StlMouse', function () {

  beforeEach(module('stlApp'));

  it('should have all mouse handling functions', inject(function (stlMouse) {
    expect(angular.isFunction(stlMouse.down)).toBe(true);
    expect(angular.isFunction(stlMouse.up)).toBe(true);
    expect(angular.isFunction(stlMouse.move)).toBe(true);
  }));
});