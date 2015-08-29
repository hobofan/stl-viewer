(function () {
  "use strict";

  app.service('stlModel', ['stlMaterials', 'stlScene',

    function (stlMaterials, stlScene) {

      var mesh;

      function open(data, callback) {

        (new StlReader()).read(data, function (vn, v, n) {

          if (v && v.length > 3) {

            if (mesh) {
              stlScene.remove(mesh);
            }

            var geometry = new THREE.BufferGeometry();
            geometry.addAttribute('position', new THREE.BufferAttribute(v, 3));
            geometry.addAttribute('normal', new THREE.BufferAttribute(n, 3));
            mesh = new THREE.Mesh(geometry, stlMaterials.defaultMaterial);

            stlScene.add(mesh);

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
