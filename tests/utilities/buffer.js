
describe('Buffer utilities', function () {

  beforeEach(module('stlApp'));

  it('should have a function to convert to an array buffer', inject(
    function (stlBuffer) {

      expect(angular.isFunction(stlBuffer.toArrayBuffer)).toBe(true);
    }
  ));
});
