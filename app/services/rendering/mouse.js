(function () {
  "use strict";

  app.service('stlMouse', ['stlMousePos', 'stlModes',

    function (stlMousePos, stlModes) {

      var lastPt, downPt, deltaPt, mousePressed = false,
        mouseWheeled = false;

      function setMode(ev) {

        var button = ev.button;

        switch (button) {
          case 0:
            stlModes.setMode(stlModes.modes.ROTATE);
            break;
          case 1:
            stlModes.setMode(stlModes.modes.ZOOM);
            break;
          case 2:
            stlModes.setMode(stlModes.modes.PAN);
            break;
        }
      }

      function down(ev) {

        setMode(ev);

        var pt = stlMousePos.pos(ev);

        mousePressed = true;
        lastPt = downPt = pt;
      }

      function move(ev) {

        mouseWheeled = false;
        if (!mousePressed) {
          return;
        }

        var pt = stlMousePos.pos(ev);

        deltaPt = { X:pt.X - lastPt.X, Y:pt.Y - lastPt.Y};
        lastPt = pt;
      }

      function up(ev) {

        stlModes.setMode(stlModes.modes.DO_NOTHING);
        mousePressed = false;
      }

      function wheel(ev) {

        stlModes.setMode(stlModes.modes.ZOOM);
        var pt = stlMousePos.pos(ev);
        lastPt = downPt = pt;

        mouseWheeled = true;
        deltaPt = {X: 0, Y: ev.wheelDeltaY};
      }

      function isMousePressed() {
        return mousePressed;
      }

      function hasMouseWheeled() {
        return mouseWheeled;
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
        wheel: wheel,
        isMousePressed: isMousePressed,
        downPoint: downPoint,
        delta: delta,
        hasMouseWheeled: hasMouseWheeled
      };
    }
  ]);
}());