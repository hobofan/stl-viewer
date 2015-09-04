(function () {
  "use strict";

  app.service('stlModes', [

    function () {

      var modes = {
        ROTATE: 'rotate',
        PAN: 'pan',
        ZOOM: 'zoom'
      };

      var mode = modes.ROTATE;

      function setMode(m) {
        mode = m;
      }

      function getMode() {
        return mode;
      }

      return {
        modes: modes,
        getMode: getMode,
        setMode: setMode
      };
    }
  ]);

}());