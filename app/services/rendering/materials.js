(function () {
  "use strict";

  app.service('stlMaterials', [

    function () {

      var defaultMaterial = new THREE.MeshLambertMaterial({
              color: 0xcccccc,
              side: THREE.DoubleSide
            });

      defaultMaterial.polygonOffset = true;
      defaultMaterial.polygonOffsetFactor = 1.0;
      defaultMaterial.polygonOffsetUnits = 1.0;

      return {
        defaultMaterial: defaultMaterial
      };
    }
  ]);
}());