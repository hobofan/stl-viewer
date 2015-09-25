(function () {
  "use strict";

  app.service('stlViewMenu', ['stlSetMode', 'stlSetOrientation',

    function (stlSetMode, stlSetOrientation) {

      var menu =
        {
          label: 'View',
          submenu: [
            {
              label: 'Move',
              submenu: [
                {
                  label: 'Pan',
                  click: stlSetMode.set,
                  accelerator: 'CmdOrCtrl+P'
                },
                {
                  label: 'Zoom',
                  click: stlSetMode.set,
                  accelerator: 'CmdOrCtrl+Z'
                },
                {
                  label: 'Rotate',
                  click: stlSetMode.set,
                  accelerator: 'CmdOrCtrl+R'
                }
              ]
            },
            {
              label: 'Render',
              submenu: [
                {
                  label: 'Shaded',
                  click: stlSetMode.set
                },
                {
                  label: 'Lines',
                  click: stlSetMode.set
                }
              ]
            },
            {
              label: 'Orient',
              submenu: [
                {
                  label: 'Top',
                  click: stlSetOrientation.set
                },
                {
                  label: 'Bottom',
                  click: stlSetOrientation.set
                },
                {
                  label: 'Left',
                  click: stlSetOrientation.set
                },
                {
                  label: 'Right',
                  click: stlSetOrientation.set
                },
                {
                  label: 'Front',
                  click: stlSetOrientation.set
                },
                {
                  label: 'Back',
                  click: stlSetOrientation.set
                },
                {
                  label: 'Isometric',
                  click: stlSetOrientation.set
                }
              ]
            }
         ]
        };

      return {
        menu: menu
      };
    }
  ]);
}());