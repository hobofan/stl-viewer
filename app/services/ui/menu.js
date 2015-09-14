(function () {
  "use strict";

  app.service('stlMenu', ['stlFileOpen', 'stlSetMode',

    function (stlFileOpen, stlSetMode) {

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
              label: 'Pan',
              click: stlSetMode.set,
              type: 'radio',
              checked: false
            },
            {
              label: 'Zoom',
              click: stlSetMode.set,
              type: 'radio',
              checked: false
            },
            {
              label: 'Rotate',
              click: stlSetMode.set,
              type: 'radio',
              checked: true
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
