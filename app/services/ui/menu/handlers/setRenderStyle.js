
(function () {
  "use strict";

  app.service('stlSetRenderStyle', ['stlModel', 'stlRenderer',
    '$rootScope',

    function (stlModel, stlRenderer, $rootScope) {

      function set(item) {

        stlModel.setRenderStyle(item.label.toLowerCase());

        stlRenderer.render();
        $rootScope.$apply();
      }

      return {
        set: set
      };
    }
  ]);
}());