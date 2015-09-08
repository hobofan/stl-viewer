
describe('StlMousePos', function () {

  beforeEach(module('stlApp'));

  it('should have a function to get the mouse position from the event object', inject(
    function (stlMousePos) {

      expect(angular.isFunction(stlMousePos.pos)).toBe(true);
    }
  ));

  it('should return a valid position object from the pos function', inject(
    function (stlMousePos) {

      var pixelRatio = window.devicePixelRatio || 1;
      var pos = stlMousePos.pos({ layerX: 1, layerY: 2});

      expect(pos.X).toEqual(1* pixelRatio);
      expect(pos.Y).toEqual(2* pixelRatio);
    }
  ));
});