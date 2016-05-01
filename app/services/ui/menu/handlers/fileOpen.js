(function () {
  "use strict";

  app.service('stlFileOpen', ['stlModel', 'stlBuffer',

    function (stlModel, stlBuffer) {

      function open() {

        var remote = require('remote');
        var dialog = remote.require('dialog');
        var fs = remote.require('fs');

        dialog.showOpenDialog(remote.getCurrentWindow(), {
          properties: [ 'openFile'],
          filters: [{ name: 'STL', extensions: ['stl'] }]},
          function (fileNames) {
            if (fileNames && fileNames.length > 0) {
              openPath(fileNames[0]);
            }
          }
        );
      }

      function openPath(filePath) {
        var remote = require('remote');
        var fs = remote.require('fs');

        if (filePath && filePath.length > 0) {
          fs.readFile(filePath, function read(err, data) {
            if (err) {
              console.log(err);
              return;
            }

            stlModel.open(stlBuffer.toArrayBuffer(data));
          });
        }
      }

      return {
        open: open,
        openPath: openPath
      };
    }
  ]);
}());
