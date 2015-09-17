(function () {
  "use strict";

  app.directive('stlCanvas', ['stlRenderer', 'stlMouse', 'stlMousePos',
    'stlCamera',

    function (stlRenderer, stlMouse, stlMousePos, stlCamera) {

      return {
        restrict: 'E',
        template: '<canvas></canvas>',
        replace: true,
        link: function (scope, element) {

          stlRenderer.init(element[0]);
          stlRenderer.resize();

          element.bind('mousedown', function (ev) {

            stlMouse.down(ev);
            ev.preventDefault();
          });

          element.bind('mousemove', function (ev) {
            stlMouse.move(ev);
            stlCamera.move();

            if (stlMouse.isMousePressed()) {
              stlRenderer.render();
            }
          });

          element.bind('mousewheel', function (ev) {
            stlMouse.wheel(ev);
            stlCamera.move();

            stlRenderer.render();
          });
        }
      };
    }
  ]);
}());
