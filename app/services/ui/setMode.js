(function () {
  "use strict";

  app.service('stlSetMode', [

    function () {

      function set(item) {
        console.log(item.label);
      }

      return {
        set: set
      };
    }
  ]);
}());