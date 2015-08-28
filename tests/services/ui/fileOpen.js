
describe('StlFileOpen', function () {

  beforeEach(module('stlApp'));

  it('should have an open function', inject(function (stlFileOpen) {
    expect(angular.isFunction(stlFileOpen.open)).toBe(true);
  }));
});
