(function () {
  "use strict";

  app.service('stlCamera', [

    function () {

    	var camera;

      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

      function update(aspect, bbox) {

      }

      return {
      	camera: camera,
      	update: update
      };
    }
  ]);
}());
