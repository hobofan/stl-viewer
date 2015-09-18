(function () {
  "use strict";

  app.service('stlViewMenu', ['stlSetMode',

    function (stlSetMode) {

      var menu =
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
        };

      return {
        menu: menu
      };
    }
  ]);
}());