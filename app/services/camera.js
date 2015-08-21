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

	    function orient(quat) {

	    	rotation.set(0, 0, 0, 1);
	      rotation.multiply(quat);
	    }

	    function mouseDown(pt) {

	    }

	    function mouseMove(pt) {

	    }

	    function mouseUp() {

	    }

      function update(aspect, bbox) {

      }

      return {
      	camera: camera,
      	update: update,
      	modes: modes,
      	setMode: setMode,
      	orient: orient,
      	mouseDown: mouseDown,
      	mouseMove: mouseMove,
      	mouseUp: mouseUp
      };
    }
  ]);
}());
