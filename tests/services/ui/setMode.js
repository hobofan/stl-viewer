
describe('StlSetMode', function () {

  beforeEach(module('stlApp'));

  it('should have a function to set the mode', inject(

    function (stlSetMode) {
      expect(angular.isFunction(stlSetMode.set)).toBe(true);
  }));
});

