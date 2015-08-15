
(function () {
  "use strict";

  function createMenu() {

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
             Dialog.showOpenDialog({ properties: [ 'openFile'],
              filters: [{ name: 'Stereolithography (STL)', extensions: ['stl'] }]});
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
