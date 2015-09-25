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

      function isValid(m) {
        if (m === modes.ROTATE || m === modes.PAN ||
          m === modes.ZOOM) {
          return true;
        }

        return false;
      }

      function setMode(m) {

        if (isValid(m)) {
          mode = m;
        }
      }

      function getMode() {
        return mode;
      }

      function shouldRotate() {
        return mode === modes.ROTATE;
      }

      function shouldPan() {
        return mode === modes.PAN;
      }

      function shouldZoom() {
        return mode === modes.ZOOM;
      }

      return {
        modes: modes,
        getMode: getMode,
        setMode: setMode,
        shouldRotate: shouldRotate,
        shouldPan: shouldPan,
        shouldZoom: shouldZoom
      };
    }
  ]);

}());