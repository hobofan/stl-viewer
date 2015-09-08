(function () {
  "use strict";

  app.service('stlMousePos', [

    function () {

      var pixelRatio = window.devicePixelRatio || 1;

      function pos(ev) {

        return {
          X: ev.layerX * pixelRatio,
          Y: ev.layerY * pixelRatio
        };
      }

      return {
        pos: pos
      };
    }
  ]);
}());