(function () {
  "use strict";

  app.service('stlMouse', [

    function () {

      var lastPt, downPt, deltaPt, mousePressed = false;

      function down(pt) {

        mousePressed = true;
        lastPt = downPt = pt;
      }

      function move(pt) {

        deltaPt = { X:pt.X - lastPt.X, Y:pt.Y - lastPt.Y};
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

      function delta() {
        return deltaPt;
      }

      return {
        down: down,
        move: move,
        up: up,
        isMousePressed: isMousePressed,
        downPoint: downPoint,
        delta: delta
      };
    }
  ]);
}());