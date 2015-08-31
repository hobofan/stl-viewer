(function () {
  "use strict";

  app.service('stlMouse', [

    function () {

      var mousePressed = false;

      function down(pt) {
        mousePressed = true;
      }

      function move(pt) {

      }

      function up(pt) {
        mousePressed = false;
      }

      function isMousePressed() {
        return mousePressed;
      }

      return {
        down: down,
        move: move,
        up: up,
        isMousePressed: isMousePressed
      };
    }
  ]);
}());