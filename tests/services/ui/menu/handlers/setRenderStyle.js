
describe('StlSetRenderStyle', function () {

  beforeEach(module('stlApp'));

  it('should have a function to set the orientation', inject(

    function (stlSetRenderStyle) {
      expect(angular.isFunction(stlSetRenderStyle.set)).toBe(true);
  }));
});