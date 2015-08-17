(function () {
  "use strict";

  app.directive('stlCanvas', [

    function () {

      return {
        restrict: 'E',
        template: '<canvas></canvas>',
        replace: true
      };
    }
  ]);
}());
