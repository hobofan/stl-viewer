
// jshint multistr:true
describe('StlMouse', function () {

  beforeEach(module('stlApp'));

  var pixelRatio = window.devicePixelRatio || 1;

  it('should have all mouse handling functions', inject(function (stlMouse) {
    expect(angular.isFunction(stlMouse.down)).toBe(true);
    expect(angular.isFunction(stlMouse.up)).toBe(true);
    expect(angular.isFunction(stlMouse.move)).toBe(true);
  }));

  it('should have a function to check if the mouse is pressed or has been \
    wheeled',
    inject(function (stlMouse) {

    expect(angular.isFunction(stlMouse.isMousePressed)).toBe(true);
    expect(angular.isFunction(stlMouse.hasMouseWheeled)).toBe(true);
  }));

  it('should return false when isMousePressed is called initially',
    inject(function (stlMouse) {

    expect(stlMouse.isMousePressed()).toBe(false);
  }));

  it('should return correct status when the isMousePressed function is called',
    inject(function (stlMouse) {

    stlMouse.down({ X: 0, Y: 0});
    expect(stlMouse.isMousePressed()).toBe(true);
    stlMouse.up({ X: 0, Y: 0});
    expect(stlMouse.isMousePressed()).toBe(false);
  }));

  it('should have a function to get the point where the mouse was initially \
    clicked/down',
    inject(function (stlMouse) {

    expect(angular.isFunction(stlMouse.downPoint)).toBe(true);
  }));

  it('should correctly return the mouse down position when the downPoint \
    function is called',
    inject(function (stlMouse) {

    var ev = { layerX: 1, layerY: 2};
    stlMouse.down(ev);

    expect(stlMouse.downPoint()).toEqual({ X: 1 * pixelRatio,
      Y: 2 * pixelRatio});
  }));

  it('should have a function to get the delta movement when the mouse is moved',
    inject(function (stlMouse) {

    expect(angular.isFunction(stlMouse.delta)).toBe(true);
  }));

  it('should return the correct return the delta movement',
    inject(function (stlMouse) {

    var downEv = { layerX: 1, layerY: 2};
    var moveEv = { layerX: 3, layerY: 5};

    stlMouse.down(downEv);
    stlMouse.move(moveEv);

    var deltaPt = stlMouse.delta();
    expect(deltaPt).toEqual({ X: 2 * pixelRatio, Y: 3 * pixelRatio});
  }));
});