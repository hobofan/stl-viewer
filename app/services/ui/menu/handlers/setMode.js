(function () {
  "use strict";

  app.service('stlSetMode', ['stlModes', '$rootScope',

    function (stlModes, $rootScope) {

      function set(item) {

        stlModes.setMenuMode(item.label.toLowerCase());
        $rootScope.$apply();
      }

      return {
        set: set
      };
    }
  ]);
}());