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

      function setMode(m) {
      	mode = m;
      }

      function getMode() {
      	return mode;
      }

      function update(aspect, bbox) {

      }

      return {
      	camera: camera,
      	update: update,
      	modes: modes,
      	setMode: setMode,
      	getMode: getMode
      };
    }
  ]);
}());
