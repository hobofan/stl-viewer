(function () {
  "use strict";

  app.service('stlModel', ['stlMaterials',

    function (stlMaterials) {

      function open(data, callback) {

        (new StlReader()).read(data, function (vn, v, n) {

          if (v && v.length > 3) {

            var geometry = new THREE.BufferGeometry();
            geometry.addAttribute('position', new THREE.BufferAttribute(v, 3));
            geometry.addAttribute('normal', new THREE.BufferAttribute(n, 3));
            var mesh = new THREE.Mesh(geometry, stlMaterials.defaultMaterial);

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
