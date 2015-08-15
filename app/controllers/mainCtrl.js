
(function () {
  "use strict";

  function createMenu() {

    if (typeof require === 'undefined') {
      return;
    }

    var remote = require('remote');
    var Menu = remote.require('menu');
    var Dialog = remote.require('dialog');

    var template = [
     {
        label: 'File',
        submenu: [
          {
            label: 'Open',
            click: function() {
              Dialog.showOpenDialog(remote.getCurrentWindow(), {
                properties: [ 'openFile'],
                filters: [{ name: 'STL', extensions: ['stl'] }]},
                function (fileName) {
                  console.log(fileName);
                }
              );
            }
          }
       ]
     }
   ];

    var menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }

  app.controller('MainCtrl', function($scope) {
    $scope.str = "some test string";
    createMenu();
  });
}());
