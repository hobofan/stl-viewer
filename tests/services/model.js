
describe('StlModel', function () {

  beforeEach(module('stlApp'));

  it('should have a open function', inject(function (stlModel) {
    expect(angular.isFunction(stlModel.open)).toBe(true);
  }));
});
