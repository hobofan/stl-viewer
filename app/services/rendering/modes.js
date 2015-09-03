(function () {
  "use strict"

  app.service('stlModes', [

    function () {

      var mode;

      function setMode(m) {
        mode = m;
      }

      function mode() {
        return mode;
      }

      return {
        mode: mode,
        setMode: setMode
      };
    }
  ]);

}());