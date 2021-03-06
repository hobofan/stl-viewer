
(function () {
  "use strict";

  app.service('stlBuffer', [

    function () {

      function toArrayBuffer(buffer) {

        var ab = new ArrayBuffer(buffer.length);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buffer.length; ++i) {
          view[i] = buffer[i];
        }
        return ab;
      }

      return {
        toArrayBuffer: toArrayBuffer
      };
    }
  ]);
}());