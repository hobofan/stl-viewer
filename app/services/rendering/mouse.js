(function () {
  "use strict";

  app.service('stlMouse', ['stlMousePos',

    function (stlMousePos) {

      var lastPt, downPt, deltaPt, mousePressed = false;

      function down(ev) {

        var pt = stlMousePos.pos(ev);

        mousePressed = true;
        lastPt = downPt = pt;
      }

      function move(ev) {

        if (!mousePressed) {
          return;
        }

        var pt = stlMousePos.pos(ev);

        deltaPt = { X:pt.X - lastPt.X, Y:pt.Y - lastPt.Y};
        lastPt = pt;
      }

      function up() {
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