(function () {
  "use strict";

  app.service('stlCamera', [

    function () {

    	var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
      var sceneScale = 2.0;

			var modes = { ROTATE: "rotate", PAN: "pan", ZOOM: "zoom"},
      	mode = modes.ROTATE;

      var rotation = new THREE.Quaternion();
      var translation = new THREE.Vector2(0, 0);
      var zoom = 1.0;

      var mousePos = new THREE.Vector2(0, 0);
      var mouseDownPos = new THREE.Vector2(0, 0);
      var mousePosDiff = new THREE.Vector2(0, 0);
      var mousePressed = false;

      var devicePixelRatio = window.devicePixelRatio || 1;
      var deltaToAngle = (Math.PI / 180.0) * 0.3 / devicePixelRatio;

      var tempRotQuat = new THREE.Quaternion();
      var pitchAxis = new THREE.Vector3(0.0, 1.0, 0.0);
      var rollAxis = new THREE.Vector3(1.0, 0.0, 0.0);

      var height = 1;
      var width = 1;
      var smallerDimension = 1;

      function setSize(w, h, scale) {

        width = w;
        height = h;
        sceneScale = scale;

        smallerDimension = width < height ? width : height;
      }

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
        mouseDownPos.set(pt.X, pt.Y);
	    }

	    function mouseMove(pt) {

	    	if (mousePressed) {
	    		return;
	    	}

				mousePosDiff.set(pt.X - pos.x, pt.Y - pos.y);
        mousePos.set(pt.X, pt.Y);

	    	if (mode === modes.ROTATE) {

      		tempRotQuat.setFromAxisAngle(pitchAxis, -mousePosDiff.x * deltaToAngle);
      		rotation.multiply(tempRotQuat);

      		tempRotQuat.setFromAxisAngle(rollAxis, -mousePosDiff.y * deltaToAngle);
      		rotation.multiply(tempRotQuat);

	    	} else if (mode === modes.PAN) {

          translation.x += (mousePosDiff.x * sceneScale * zoom) / smallerDimension;
          translation.y += -(mousePosDiff.y * sceneScale * zoom) / smallerDimension;

	    	} else if (mode === modes.ZOOM) {

          var lastZoom = zoom;

          zoom *= dd.y < 0 ? 0.9 : 1.1;
          zoom = zoom > 20.0 ? 20.0 : zoom;
          zoom = zoom < 0.1 ? 0.1 : zoom;

          var zoomMultiplier = sceneScale * (lastZoom - zoom) / smallerDimension;
          translation.x += -(mouseDownPos.x - width / 2.0) * zoomMultiplier;
          translation.y += (mouseDownPos.y - height / 2.0) * zoomMultiplier;
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
      	mouseUp: mouseUp,
        setSize: setSize
      };
    }
  ]);
}());
