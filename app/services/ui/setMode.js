(function () {
  "use strict";

  app.service('stlSetMode', ['stlModes',

    function (stlModes) {

      function set(item) {

        stlModes.setMode(item.label.toLowerCase(),
          stlModes.priorities.MEDIUM);
      }

      return {
        set: set
      };
    }
  ]);
}());