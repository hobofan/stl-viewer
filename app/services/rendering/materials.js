(function () {
  "use strict";

  app.service('stlMaterials', [

    function () {

      var defaultMaterial = new THREE.MeshLambertMaterial({
              color: 0xcccccc,
              side: THREE.DoubleSide
            });

      var defaultLineMaterial = new THREE.LineBasicMaterial({
              color: 0x333333,
              linewidth: 1
            });

      defaultMaterial.polygonOffset = true;
      defaultMaterial.polygonOffsetFactor = 1.0;
      defaultMaterial.polygonOffsetUnits = 1.0;

      return {
        defaultMaterial: defaultMaterial,
        defaultLineMaterial: defaultLineMaterial
      };
    }
  ]);
}());