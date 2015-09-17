(function () {
  "use strict";

  app.service('stlOrient', [

    function () {

      var orientations = {
        BACK: { yaw: Math.PI / 2, roll: Math.PI / 2 },
        FRONT: { yaw: -Math.PI / 2, roll: Math.PI / 2 },
        RIGHT: { yaw: Math.PI * 2, roll: Math.PI / 2 },
        LEFT: { yaw: Math.PI, roll: Math.PI / 2 },
        TOP: { yaw: 0, roll: 0 },
        BOTTOM: { yaw: Math.PI, roll: Math.PI },
        ISOMETRIC: { yaw: Math.PI / 4.0, roll: Math.PI / 3.0 }
      };

      function orient(o) {

        var rot = new THREE.Quaternion();
        rot.multiply(quatFromAxisAngle(vec3(0, 0, 1), o.yaw));
        rot.multiply(quatFromAxisAngle(vec3(1, 0, 0), o.roll));
        return rot;
      }

      return {
        orientations: orientations,
        orient: orient
      };
    }
  ]);
}());