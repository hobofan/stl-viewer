
describe('StlModel', function () {

  beforeEach(module('stlApp'));

  it('should have a open function', inject(function (stlModel) {
    expect(angular.isFunction(stlModel.open)).toBe(true);
  }));

  it('should have a render styles enum and a function to set the render style',
    inject(function (stlModel) {
      expect(stlModel.renderStyles).toBeDefined();
      expect(stlModel.renderStyles.SHADED).toBeDefined();
      expect(stlModel.renderStyles.WIREFRAME).toBeDefined();
      expect(angular.isFunction(stlModel.setRenderStyle)).toBe(true);
      expect(angular.isFunction(stlModel.getRenderStyle)).toBe(true);
  }));

  it('should have the shaded mode set as default',
    inject(function (stlModel) {

      expect(stlModel.getRenderStyle()).toEqual(stlModel.renderStyles.SHADED);
  }));

  it('should have return the render style that was set earlier',
    inject(function (stlModel) {

      stlModel.setRenderStyle(stlModel.renderStyles.WIREFRAME);
      expect(stlModel.getRenderStyle()).toEqual(stlModel.renderStyles.WIREFRAME);

      stlModel.setRenderStyle(stlModel.renderStyles.SHADED);
      expect(stlModel.getRenderStyle()).toEqual(stlModel.renderStyles.SHADED);
  }));
});
