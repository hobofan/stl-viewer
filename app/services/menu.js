(function () {
  "use strict";

  app.service('stlMenu', ['stlModel',

    function (stlModel) {

      function toArrayBuffer(buffer) {
        var ab = new ArrayBuffer(buffer.length);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buffer.length; ++i) {
          view[i] = buffer[i];
        }
        return ab;
      }

		  function create() {

		    if (typeof require === 'undefined') {
		      return;
		    }

		    var remote = require('remote');
		    var menu = remote.require('menu');
		    var dialog = remote.require('dialog');
        var fs = remote.require('fs');

		    var template = [
		     {
		        label: 'File',
		        submenu: [
		          {
		            label: 'Open',
		            click: function() {
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
		          }
		       ]
		     }
		   ];

		    var m = menu.buildFromTemplate(template);
		    menu.setApplicationMenu(m);
		  }

      return {
      	create: create
      };
    }
  ]);
}());
