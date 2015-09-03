(function () {
  "use strict";

  app.service('stlMenu', ['stlFileOpen',

    function (stlFileOpen) {

		  function create() {

		    if (typeof require === 'undefined') {
		      return;
		    }

        var remote = require('remote');
        var menu = remote.require('menu');

		    var template = [
		     {
		        label: 'File',
		        submenu: [
		          {
		            label: 'Open',
		            click: stlFileOpen.open
		          }
		       ]
		     },
        {
          label: 'View',
          submenu: [
            {
              label: 'Reset',
              click: stlFileOpen.open
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
