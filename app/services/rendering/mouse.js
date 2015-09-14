(function () {
  "use strict";

  app.service('stlMouse', ['stlMousePos', 'stlModes',

    function (stlMousePos, stlModes) {

      var lastPt, downPt, deltaPt, mousePressed = false;

      function setMode(ev) {

        var button = ev.button;
        var priority = stlModes.priorities.LOW;

        switch (button) {
          case 0:
            stlModes.setMode(stlModes.modes.ROTATE, priority);
            break;
          case 1:
            stlModes.setMode(stlModes.modes.PAN, priority);
            break;
          case 2:
            stlModes.setMode(stlModes.modes.ZOOM, priority);
            break;
          default:
            stlModes.setMode(stlModes.modes.ROTATE, priority);
        }
      }

      function down(ev) {

        setMode(ev);

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