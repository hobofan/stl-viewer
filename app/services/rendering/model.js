(function () {
  "use strict";

  app.service('stlModel', ['stlMaterials', 'stlScene', 'stlRenderer',
    'stlCamera', 'stlOrient',

    function (stlMaterials, stlScene, stlRenderer, stlCamera, stlOrient) {

      var mesh, wireframe, edges;

      function open(data) {

        var res = (new StlReader()).read(data);

        if (!res) {
          return;
        }

        if (mesh) {
          stlScene.remove(mesh);
          stlScene.remove(wireframe);
          stlScene.remove(edges);
        }

        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute('position', new THREE.BufferAttribute(res.vertices, 3));
        geometry.addAttribute('normal', new THREE.BufferAttribute(res.normals, 3));
        mesh = new THREE.Mesh(geometry, stlMaterials.defaultMaterial);

        wireframe = new THREE.WireframeHelper( mesh, 0x333 );
        wireframe.visible = false;

        edges = new THREE.EdgesHelper( mesh, 0x333 );
        edges.visible = false;

        stlScene.add(mesh);
        stlScene.add(wireframe);
        stlScene.add(edges);

        stlCamera.orient(stlOrient.orient(stlOrient.orientations.ISOMETRIC));
        stlRenderer.render();
      }

      return {
        open: open
      };
    }
  ]);
}());
