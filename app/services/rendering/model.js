(function () {
  "use strict";

  app.service('stlModel', ['stlMaterials', 'stlScene', 'stlRenderer',
    'stlCamera', 'stlOrient',

    function (stlMaterials, stlScene, stlRenderer, stlCamera, stlOrient) {

      var mesh, wireframe, edges;

      var renderStyles = {
        SHADED: 'shaded',
        WIREFRAME: 'wireframe'
      };

      var activeRenderStyle = renderStyles.SHADED;

      function open(data) {

        var res = (new StlReader()).read(data);

        if (!res) {
          return;
        }

        if (mesh) {
          stlScene.remove(mesh);
          stlScene.remove(wireframe);
        }

        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute('position', new THREE.BufferAttribute(res.vertices, 3));
        geometry.addAttribute('normal', new THREE.BufferAttribute(res.normals, 3));
        mesh = new THREE.Mesh(geometry, stlMaterials.defaultMaterial);
        wireframe = new THREE.WireframeHelper( mesh, 0x333 );

        stlScene.add(mesh);
        stlScene.add(wireframe);

        setRenderStyle(activeRenderStyle);

        stlCamera.orient(stlOrient.orient(stlOrient.orientations.ISOMETRIC));
        stlRenderer.render();
      }

      function setRenderStyle(style) {

        activeRenderStyle = style;
        if (!mesh) {
          return;
        }

        mesh.visible = false;
        wireframe.visible = false;

        switch (style) {
          case renderStyles.WIREFRAME:
            wireframe.visible = true;
            break;
          case renderStyles.SHADED:
            mesh.visible = true;
            break;
        }
      }

      function getRenderStyle() {
        return activeRenderStyle;
      }

      return {
        open: open,
        renderStyles: renderStyles,
        setRenderStyle: setRenderStyle,
        getRenderStyle: getRenderStyle
      };
    }
  ]);
}());
