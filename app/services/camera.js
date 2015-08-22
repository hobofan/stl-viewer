(function () {
  "use strict";

  app.service('stlCamera', [

    function () {

    	var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

			var modes = { ROTATE: "rotate", PAN: "pan", ZOOM: "zoom"},
      	mode = modes.ROTATE;

      var rotation = new THREE.Quaternion();
      var mousePos = new THREE.Vector2(0, 0);
      var mousePosDiff = new THREE.Vector2(0, 0);
      var mousePressed = false;

      var devicePixelRatio = window.devicePixelRatio || 1;
      var deltaToAngle = (Math.PI / 180.0) * 0.3 / devicePixelRatio;

      var tempRotQuat = new THREE.Quaternion();
      var pitchAxis = new THREE.Vector3(0.0, 1.0, 0.0);
      var rollAxis = new THREE.Vector3(1.0, 0.0, 0.0);

      function setMode(m) {
      	mode = m;
      }

	    function orient(quat) {

	    	rotation.set(0, 0, 0, 1);
	      rotation.multiply(quat);
	    }

	    function mouseDown(pt) {

				mousePressed = true;
        mousePos.set(pt.X, pt.Y);
	    }

	    function mouseMove(pt) {

	    	if (mousePressed) {
	    		return;
	    	}

				mousePosDiff.set(pt.X - pos.x, pt.Y - pos.y);

	    	if (mode === modes.ROTATE) {

      		tempRotQuat.setFromAxisAngle(pitchAxis, -dd.x * deltaToAngle);
      		rotation.multiply(tempRotQuat);

      		tempRotQuat.setFromAxisAngle(rollAxis, -dd.y * deltaToAngle);
      		rotation.multiply(tempRotQuat);

	    	} else if (mode === modes.PAN) {

	    	} else if (mode === modes.ZOOM) {

	    	}
	    }

	    function mouseUp() {

	    	mousePressed = false;
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
