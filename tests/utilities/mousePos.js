
describe('StlMousePos', function () {

  beforeEach(module('stlApp'));

  it('should have a function to get the mouse position from the event object', inject(
    function (stlMousePos) {

      expect(angular.isFunction(stlMousePos.pos)).toBe(true);
    }
  ));
});