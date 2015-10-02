(function () {
  "use strict";

  app.service('stlMenu', ['stlFileOpen', 'stlViewMenu',

    function (stlFileOpen, stlViewMenu) {

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
		            click: stlFileOpen.open,
                accelerator: 'CmdOrCtrl+O'
		          }
		       ]
		     },
         stlViewMenu.menu
		   ];

		    var m = menu.buildFromTemplate(template);
		    menu.setApplicationMenu(m);

        window.addEventListener('contextmenu', function (e) {
          e.preventDefault();
          m.popup(remote.getCurrentWindow());
        }, false);
		  }

      return {
      	create: create
      };
    }
  ]);
}());
