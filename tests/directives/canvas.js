
describe('StlCanvas', function () {

  var compile, scope, directiveElem;

  function getCompiledElement(){
    var element = angular.element('<stl-canvas></stl-canvas>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  beforeEach(function () {
    module('stlApp');

    inject(function($compile, $rootScope){
      compile = $compile;
      scope = $rootScope.$new();
    });

    directiveElem = getCompiledElement();
  });

  it('should be a canvas element', function () {

    var elementTag = directiveElem.prop('tagName');
    expect(elementTag).toEqual('CANVAS');
  });
});
