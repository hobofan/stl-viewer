(function () {
  "use strict";

  app.controller('StatusCtrl', ['$scope', 'stlModes',

    function($scope, stlModes) {

      $scope.getMode = function () {
        return stlModes.getMode();
      };

      $scope.getOrientation = function () {
        return "Isometric";
      };
    }
  ]);
}());