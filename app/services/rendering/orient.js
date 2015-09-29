(function () {
  "use strict";

  app.service('stlOrient', [

    function () {

      var orientations = {
        BACK: { yaw: Math.PI / 2, roll: Math.PI / 2, name: "Back" },
        FRONT: { yaw: -Math.PI / 2, roll: Math.PI / 2, name: "Front" },
        RIGHT: { yaw: Math.PI * 2, roll: Math.PI / 2, name: "Right" },
        LEFT: { yaw: Math.PI, roll: Math.PI / 2, name: "Left" },
        TOP: { yaw: 0, roll: 0, name: "Top" },
        BOTTOM: { yaw: Math.PI, roll: Math.PI, name: "Bottom" },
        ISOMETRIC: { yaw: Math.PI / 4.0, roll: Math.PI / 3.0, name: "Isometric" }
      };

      var lastOrient = orientations.ISOMETRIC.name;

      function orient(o) {

        lastOrient = o.name;

        var rot = new THREE.Quaternion();
        rot.multiply(quatFromAxisAngle(vec3(0, 0, 1), o.yaw));
        rot.multiply(quatFromAxisAngle(vec3(1, 0, 0), o.roll));
        return rot;
      }

      function lastOrientation() {
        return lastOrient;
      }

      return {
        orientations: orientations,
        orient: orient,
        lastOrientation: lastOrientation
      };
    }
  ]);
}());