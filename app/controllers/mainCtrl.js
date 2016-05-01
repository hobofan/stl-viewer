function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function () {
  "use strict";

  app.controller('MainCtrl', ['$scope', '$window', 'stlMenu', 'stlRenderer',
    'stlMouse', 'stlMousePos', 'stlFileOpen',

    function($scope, $window, stlMenu, stlRenderer, stlMouse, stlMousePos, stlFileOpen) {

      stlMenu.create();

      angular.element($window).bind('resize', function () {

        stlRenderer.resize();
      });

      angular.element(document).bind('mouseup', function (ev) {

        stlMouse.up(ev);
        $scope.$apply();
      });

      var file = getParameterByName('file');
      stlFileOpen.openPath(file);
    }
  ]);
}());
