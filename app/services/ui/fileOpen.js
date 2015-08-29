(function () {
  "use strict";

  app.service('stlFileOpen', ['stlModel', 'stlBuffer',

    function (stlModel, stlBuffer) {

      function open() {

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

                stlModel.open(stlBuffer.toArrayBuffer(data));
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