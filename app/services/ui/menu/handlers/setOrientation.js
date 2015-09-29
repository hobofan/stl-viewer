
(function () {
  "use strict";

  app.service('stlSetOrientation', ['stlCamera', 'stlOrient', 'stlRenderer',
    '$rootScope',

    function (stlCamera, stlOrient, stlRenderer, $rootScope) {

      function set(item) {

        var orientation = item.label.toUpperCase();
        stlCamera.orient(stlOrient.orient(stlOrient.orientations[orientation]));
        stlRenderer.render();

        $rootScope.$apply();
      }

      return {
        set: set
      };
    }
  ]);
}());