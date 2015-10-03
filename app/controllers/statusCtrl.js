(function () {
  "use strict";

  app.controller('StatusCtrl', ['$scope', 'stlModes', 'stlOrient',

    function($scope, stlModes, stlOrient) {

      $scope.getMode = function () {
        return stlModes.getMode();
      };

      $scope.getOrientation = function () {
        return stlOrient.lastOrientation();
      };

      $scope.getRenderStyle = function () {
        return stlOrient.lastOrientation();
      };
    }
  ]);
}());