(function () {
  "use strict";

  app.directive('stlCanvas', ['stlRenderer',

    function (stlRenderer) {

      return {
        restrict: 'E',
        template: '<canvas></canvas>',
        replace: true,
        link: function (scope, element) {

          stlRenderer.init(element[0]);
          stlRenderer.resize();

          element.bind('mousedown', function (ev) {

            ev.preventDefault();
          });          

          element.bind('mousemove', function (ev) {

          });
        }
      };
    }
  ]);
}());
