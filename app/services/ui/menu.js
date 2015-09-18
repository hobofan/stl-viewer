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
              label: 'Mode',
              submenu: [
                {
                  label: 'Pan',
                  click: stlSetMode.set
                },
                {
                  label: 'Zoom',
                  click: stlSetMode.set
                },
                {
                  label: 'Rotate',
                  click: stlSetMode.set
                }
              ]
            },
            {
              label: 'Orient',
              submenu: [
                {
                  label: 'Top'
                },
                {
                  label: 'Bottom'
                },
                {
                  label: 'Left'
                },
                {
                  label: 'Right'
                },
                {
                  label: 'Front'
                },
                {
                  label: 'Back'
                },
                {
                  label: 'Isometric'
                }
              ]
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
