
(function () {
  "use strict";

  function setupWindowEventHandlers($window, renderer) {

    angular.element($window).bind('resize', function () {

      renderer.resize();
    });    
  }

  app.controller('MainCtrl', ['$scope', '$window', 'stlMenu', 'stlRenderer',

    function($scope, $window, stlMenu, stlRenderer) {
      
      stlMenu.create();
      setupWindowEventHandlers($window, stlRenderer);
    }
  ]);
}());
