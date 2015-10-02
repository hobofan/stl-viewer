(function () {
  "use strict";

  app.service('stlModel', ['stlMaterials', 'stlScene', 'stlRenderer',
    'stlCamera', 'stlOrient',

    function (stlMaterials, stlScene, stlRenderer, stlCamera, stlOrient) {

      var mesh;

      function open(data) {

        var res = (new StlReader()).read(data);

        if (!res) {
          return;
        }

        if (mesh) {
          stlScene.remove(mesh);
        }

        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute('position', new THREE.BufferAttribute(res.vertices, 3));
        geometry.addAttribute('normal', new THREE.BufferAttribute(res.normals, 3));
        mesh = new THREE.Mesh(geometry, stlMaterials.defaultMaterial);

        stlScene.add(mesh);
        stlCamera.orient(stlOrient.orient(stlOrient.orientations.ISOMETRIC));
        stlRenderer.render();
      }

      return {
        open: open
      };
    }
  ]);
}());
