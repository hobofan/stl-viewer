(function () {
  "use strict";

  app.controller('StatusCtrl', ['$scope', 'stlModes', 'stlOrient', 'stlModel',

    function($scope, stlModes, stlOrient, stlModel) {

      $scope.getMode = function () {
        return stlModes.getMode();
      };

      $scope.getOrientation = function () {
        return stlOrient.lastOrientation();
      };

      $scope.getRenderStyle = function () {
        return stlModel.getRenderStyle();
      };
    }
  ]);
}());