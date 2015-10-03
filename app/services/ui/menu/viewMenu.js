(function () {
  "use strict";

  app.service('stlViewMenu', ['stlSetMode', 'stlSetOrientation',
    'stlSetRenderStyle',

    function (stlSetMode, stlSetOrientation, stlSetRenderStyle) {

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
                  click: stlSetRenderStyle.set,
                  accelerator: 'Ctrl+Alt+S'
                },
                {
                  label: 'Wireframe',
                  click: stlSetRenderStyle.set,
                  accelerator: 'Ctrl+Alt+W'
                }
              ]
            },
            {
              label: 'Orient',
              submenu: [
                {
                  label: 'Top',
                  click: stlSetOrientation.set,
                  accelerator: 'Ctrl+Shift+T'
                },
                {
                  label: 'Bottom',
                  click: stlSetOrientation.set,
                  accelerator: 'Ctrl+Shift+M'
                },
                {
                  label: 'Left',
                  click: stlSetOrientation.set,
                  accelerator: 'Ctrl+Shift+L'
                },
                {
                  label: 'Right',
                  click: stlSetOrientation.set,
                  accelerator: 'Ctrl+Shift+R'
                },
                {
                  label: 'Front',
                  click: stlSetOrientation.set,
                  accelerator: 'Ctrl+Shift+F'
                },
                {
                  label: 'Back',
                  click: stlSetOrientation.set,
                  accelerator: 'Ctrl+Shift+B'
                },
                {
                  label: 'Isometric',
                  click: stlSetOrientation.set,
                  accelerator: 'Ctrl+Shift+I'
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