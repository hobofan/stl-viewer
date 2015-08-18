
describe('StlMenu', function () {

  beforeEach(module('stlApp'));

  it('should have a function to create the menu', inject(function (stlMenu) {
    expect(angular.isFunction(stlMenu.create)).toBe(true);
  }));
});
