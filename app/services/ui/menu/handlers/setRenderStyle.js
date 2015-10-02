
(function () {
  "use strict";

  app.service('stlSetRenderStyle', ['stlRenderer',
    '$rootScope',

    function (stlRenderer, $rootScope) {

      function set(item) {

        // TODO

        stlRenderer.render();
        $rootScope.$apply();
      }

      return {
        set: set
      };
    }
  ]);
}());