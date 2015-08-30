(function () {
  "use strict";

  app.service('stlModel', ['stlMaterials', 'stlScene', 'stlRenderer',

    function (stlMaterials, stlScene, stlRenderer) {

      var mesh;

      function open(data) {

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
            stlRenderer.requestRender();
          }
        });
      }

      return {
        open: open
      };
    }
  ]);
}());
