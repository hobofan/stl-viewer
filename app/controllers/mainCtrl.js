
(function () {
  "use strict";

  app.controller('MainCtrl', ['$scope', '$window', 'stlMenu', 'stlRenderer',
    'stlMouse', 'stlMousePos',

    function($scope, $window, stlMenu, stlRenderer, stlMouse, stlMousePos) {

      stlMenu.create();

      angular.element($window).bind('resize', function () {

        stlRenderer.resize();
      });

      angular.element(document).bind('mouseup', function (ev) {

        stlMouse.up(ev);
      });
    }
  ]);
}());
