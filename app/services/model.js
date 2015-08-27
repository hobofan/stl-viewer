(function () {
  "use strict";

  app.service('stlModel', [

    function () {

      function open(data, callback) {

        (new StlReader()).read(data, function (vn, v, n) {

          if (v && v.length > 3) {

            var material = new THREE.MeshLambertMaterial({
              color: 0xccc,
              side: THREE.DoubleSide
            });

            material.polygonOffset = true;
            material.polygonOffsetFactor = 1.0;
            material.polygonOffsetUnits = 1.0;

            var geometry = new THREE.BufferGeometry();
            geometry.addAttribute('position', new THREE.BufferAttribute(v, 3));
            geometry.addAttribute('normal', new THREE.BufferAttribute(n, 3));
            var mesh = new THREE.Mesh(geometry, material);

            if (callback) {
              callback();
            }
          }
        });
      }

      return {
        open: open
      };
    }
  ]);
}());
