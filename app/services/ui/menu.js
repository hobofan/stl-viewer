(function () {
  "use strict";

  app.service('stlMenu', ['stlFileOpen',

    function (stlFileOpen) {

		  function create() {

        var remote = require('remote');
        var menu = remote.require('menu');

		    if (typeof require === 'undefined') {
		      return;
		    }

		    var template = [
		     {
		        label: 'File',
		        submenu: [
		          {
		            label: 'Open',
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
