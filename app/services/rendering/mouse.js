(function () {
  "use strict";

  app.service('stlMouse', [

    function () {

      var lastPt, downPt, mousePressed = false;

      function down(pt) {

        mousePressed = true;
        lastPt = downPt = pt;
      }

      function move(pt) {

        lastPt = pt;
      }

      function up(pt) {
        mousePressed = false;
      }

      function isMousePressed() {
        return mousePressed;
      }

      function downPoint() {
        return downPt;
      }

      return {
        down: down,
        move: move,
        up: up,
        isMousePressed: isMousePressed,
        downPoint: downPoint
      };
    }
  ]);
}());