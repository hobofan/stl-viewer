
describe('StlViewMenu', function () {

  beforeEach(module('stlApp'));

  it('should have a menu property', inject(function (stlViewMenu) {
    expect(stlViewMenu.menu).toBeDefined();
  }));
});
