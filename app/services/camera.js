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

      var mousePos = new THREE.Vector2(0, 0);
      var mouseDownPos = new THREE.Vector2(0, 0);
      var mousePressed = false;

      var pixelRatio = window.devicePixelRatio || 1;

      var height = 1;
      var width = 1;
      var smallerDimension = 1;

      function setSize(w, h, s) {

        width = w;
        height = h;
        scale = s;

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

        var diff = new THREE.Vector2(pt.X - mousePos.x, pt.Y - mousePos.y), m;
        mousePos.set(pt.X, pt.Y);

	    	if (mode === modes.ROTATE) {

          var q = new THREE.Quaternion();
          m = (Math.PI / 180.0) * 0.3 / pixelRatio;

      		rotation.multiply(q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -diff.x * m));
      		rotation.multiply(q.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -diff.y * m));

	    	} else if (mode === modes.PAN) {

          translation.x += (diff.x * scale * zoom) / smallerDimension;
          translation.y += -(diff.y * scale * zoom) / smallerDimension;

	    	} else if (mode === modes.ZOOM) {

          var lastZoom = zoom;

          zoom *= dd.y < 0 ? 0.9 : 1.1;
          zoom.clamp(0.05, 20);

          m = scale * (lastZoom - zoom) / smallerDimension;
          translation.x += -(mouseDownPos.x - width / 2) * m;
          translation.y += (mouseDownPos.y - height / 2) * m;
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

        center.addVectors(bbox.min, bbox.max).divideScalar(2);
        eye.applyQuaternion(rotation).add(center);
        up.applyQuaternion(rotation);

        camera.position.copy(eye);
        camera.up = up;
        camera.lookAt(center);

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
        setSize: setSize
      };
    }
  ]);
}());
