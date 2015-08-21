(function () {
  "use strict";

  app.service('stlCamera', [

    function () {

    	var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

			var modes = {
        ROTATE: "rotate",
        PAN: "pan",
        ZOOM: "zoom"
      },
      mode = modes.ROTATE;

      var rotation = new THREE.Quaternion();

      function setMode(m) {
      	mode = m;
      }

	    function rotate(quat) {
	      rotation.multiply(quat);
	    }

      function update(aspect, bbox) {

      }

      return {
      	camera: camera,
      	update: update,
      	modes: modes,
      	setMode: setMode,
      	rotate: rotate
      };
    }
  ]);
}());
