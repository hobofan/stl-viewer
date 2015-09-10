(function () {
  "use strict";

  app.service('stlSetMode', ['stlModes',

    function (stlModes) {

      function set(item) {

        stlModes.setMode(item.label.toLowerCase());
      }

      return {
        set: set
      };
    }
  ]);
}());