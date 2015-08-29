(function () {
  "use strict";

  app.service('stlFileOpen', ['stlModel',

    function (stlModel) {

      function open() {

        function toArrayBuffer(buffer) {
          var ab = new ArrayBuffer(buffer.length);
          var view = new Uint8Array(ab);
          for (var i = 0; i < buffer.length; ++i) {
            view[i] = buffer[i];
          }
          return ab;
        }

        var remote = require('remote');
        var menu = remote.require('menu');
        var dialog = remote.require('dialog');
        var fs = remote.require('fs');

        dialog.showOpenDialog(remote.getCurrentWindow(), {
          properties: [ 'openFile'],
          filters: [{ name: 'STL', extensions: ['stl'] }]},
          function (fileName) {
            if (fileName && fileName.length > 0) {
              fs.readFile(fileName[0], function read(err, data) {
                if (err) {
                  return;
                }

                stlModel.open(toArrayBuffer(data));
              });
            }
          }
        );
      }

      return {
        open: open
      };
    }
  ]);
}());