
(function () {
  "use strict";

  app.service('stlSetOrientation', [

    function () {

      function set(item) {

        var orientation = item.label.toLowerCase();
      }

      return {
        set: set
      };
    }
  ]);
}());