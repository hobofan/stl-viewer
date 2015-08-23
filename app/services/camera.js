(function () {
  "use strict";

  app.service('stlCamera', [

    function () {

    	var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
      var scale = 2.0;

			var modes = { ROTATE: "rotate", PAN: "pan", ZOOM: "zoom"},
      	mode = modes.ROTATE;

      var rotation = new THREE.Quaternion();
      var translation = new THREE.Vector2(0, 0);
      var zoom = 1.0;

      var mousePos, mouseDownPos;
      var mousePressed = false;

      var pixelRatio = window.devicePixelRatio || 1;

      var height = 1;
      var width = 1;

      function resize(w, h) {

        width = w;
        height = h;
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
        mousePos = mouseDownPos = pt;
	    }

	    function mouseMove(pt) {

	    	if (mousePressed) {
	    		return;
	    	}

        var diff = { X:pt.X - mousePos.X, Y:pt.Y - mousePos.Y}, m;
        var smallerSide = width < height ? width : height;

        mousePos = pt;

	    	if (mode === modes.ROTATE) {

          var q = new THREE.Quaternion();
          m = (Math.PI / 180.0) * 0.3 / pixelRatio;

      		rotation.multiply(q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -diff.x * m));
      		rotation.multiply(q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -diff.y * m));

	    	} else if (mode === modes.PAN) {

          m = scale * zoom / smallerSide;
          translation.x += diff.x * m;
          translation.y += -diff.y * m;

	    	} else if (mode === modes.ZOOM) {

          var lastZoom = zoom;

          zoom *= diff.y < 0 ? 0.9 : 1.1;
          zoom.clamp(0.05, 20);

          m = scale * (lastZoom - zoom) / smallerSide;
          translation.x += -(mouseDownPos.X - width / 2) * m;
          translation.y += (mouseDownPos.Y - height / 2) * m;
	    	}
	    }

	    function mouseUp() {

	    	mousePressed = false;
	    }

      function update(aspect, bbox) {

        var rad = bbox.max.distanceTo(bbox.min) * scale / 2;

        var center = new THREE.Vector3();
        var eye = new THREE.Vector3(0, 0, rad);
        var up = new THREE.Vector3(0, 1, 0);

        camera.position.copy(eye.applyQuaternion(rotation).add(center));
        camera.up = up.applyQuaternion(rotation);
        camera.lookAt(center.addVectors(bbox.min, bbox.max).divideScalar(2));

        var hAspect = (aspect > 1) ? aspect: 1;
        var vAspect = (aspect < 1) ? 1/aspect: 1;

        camera.left = (-zoom * hAspect - translation.x) * rad;
        camera.right = (zoom * hAspect - translation.x) * rad;
        camera.top = (zoom * vAspect - translation.y) * rad;
        camera.bottom = (-zoom * vAspect - translation.y) * rad;
        camera.near = -rad;
        camera.far = rad;

        camera.updateProjectionMatrix();
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
        resize: resize
      };
    }
  ]);
}());
