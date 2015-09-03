(function () {
  "use strict";

  app.service('stlModes', [

    function () {

      var mode;

      function setMode(m) {
        mode = m;
      }

      function getMode() {
        return mode;
      }

      return {
        getMode: getMode,
        setMode: setMode
      };
    }
  ]);

}());