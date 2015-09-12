(function () {
  "use strict";

  app.service('stlModes', [

    function () {

      var modes = {
        ROTATE: 'rotate',
        PAN: 'pan',
        ZOOM: 'zoom'
      };

      var priorities = {
        HIGH: 3,
        MEDIUM: 2,
        LOW: 1
      };

      var mode = modes.ROTATE;
      var priority = priorities.LOW;

      function isValid(m) {
        if (m === modes.ROTATE || m === modes.PAN ||
          m === modes.ZOOM) {
          return true;
        }

        return false;
      }

      function setMode(m, p) {

        p = p || priorities.LOW;

        if (p < priority) {
          return;
        }

        if (isValid(m)) {
          mode = m;
          priority = p;
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
        priorities: priorities,
        getMode: getMode,
        setMode: setMode,
        shouldRotate: shouldRotate,
        shouldPan: shouldPan,
        shouldZoom: shouldZoom
      };
    }
  ]);

}());