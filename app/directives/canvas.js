(function () {
  "use strict";

  app.directive('stlCanvas', ['stlRenderer', 'stlMouse', 'stlMousePos',

    function (stlRenderer, stlMouse, stlMousePos) {

      return {
        restrict: 'E',
        template: '<canvas></canvas>',
        replace: true,
        link: function (scope, element) {

          stlRenderer.init(element[0]);
          stlRenderer.resize();

          element.bind('mousedown', function (ev) {

            stlMouse.down(stlMousePos.pos(ev));
            ev.preventDefault();
          });

          element.bind('mousemove', function (ev) {
            stlMouse.move(stlMousePos.pos(ev));
          });
        }
      };
    }
  ]);
}());
