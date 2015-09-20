
(function () {
  "use strict";

  app.service('stlSetOrientation', ['stlCamera', 'stlOrient', 'stlRenderer',

    function (stlCamera, stlOrient, stlRenderer) {

      function set(item) {

        var orientation = item.label.toUpperCase();
        stlCamera.orient(stlOrient.orient(stlOrient.orientations[orientation]));
        stlRenderer.render();
      }

      return {
        set: set
      };
    }
  ]);
}());