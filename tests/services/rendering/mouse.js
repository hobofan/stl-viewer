
describe('StlMouse', function () {

  beforeEach(module('stlApp'));

  it('should have all mouse handling functions', inject(function (stlMouse) {
    expect(angular.isFunction(stlMouse.down)).toBe(true);
    expect(angular.isFunction(stlMouse.up)).toBe(true);
    expect(angular.isFunction(stlMouse.move)).toBe(true);
  }));

  it('should have a function to check if the mouse is pressed',
    inject(function (stlMouse) {

    expect(angular.isFunction(stlMouse.isMousePressed)).toBe(true);
  }));

  it('should return correct status when the isMousePressed function is called',
    inject(function (stlMouse) {

    stlMouse.down({ X: 0, Y: 0});
    expect(stlMouse.isMousePressed()).toBe(true);
    stlMouse.up({ X: 0, Y: 0});
    expect(stlMouse.isMousePressed()).toBe(false);
  }));
});