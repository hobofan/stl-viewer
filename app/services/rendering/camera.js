(function () {
  "use strict";

  app.service('stlCamera', ['stlModes',

    function (stlModes) {

    	var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
      var scale = 2.0, height = 1, width = 1;

      var rotation = quat();
      var translation = vec2();
      var zoom = 1.0;

      function resize(w, h) {
        width = w;
        height = h;
      }

	    function orient(quat) {
	    	rotation.set(0, 0, 0, 1);
	      rotation.multiply(quat);
	    }

	    function mouseMove(pt) {
	    	if (mousePressed) {
	    		return;
	    	}

        var diff = { x:pt.X - lastPt.X, y:pt.Y - lastPt.Y}, m;
        var smallerSide = width < height ? width : height;

        lastPt = pt;

	    	if (stlModes.shouldRotate()) {

          m = (Math.PI / 180.0) * 0.3 / (window.devicePixelRatio || 1);

      		rotation.multiply(quat().setFromAxisAngle(vec3(0, 1, 0), -diff.x * m));
      		rotation.multiply(quat().setFromAxisAngle(vec3(1, 0, 0), -diff.y * m));

	    	} else if (stlModes.shouldPan()) {

          m = scale * zoom / smallerSide;
          translation.add(vec2(diff.x, -diff.y).multiplyScalar(m));

	    	} else if (stlModes.shouldZoom()) {

          var lastZoom = zoom;

          zoom *= diff.y < 0 ? 0.9 : 1.1;
          zoom = zoom.clamp(0.05, 20);

          m = scale * (lastZoom - zoom) / smallerSide;
          translation.add(vec2(width/2 - downPt.X, downPt.Y - height/2).multiplyScalar(m));
	    	}
	    }

      function update(aspect, bbox) {

        var rad = bbox.max.distanceTo(bbox.min) * scale / 2;

        var center = vec3(0, 0, 0);
        var eye = vec3(0, 0, rad);
        var up = vec3(0, 1, 0);

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
      	orient: orient,
        resize: resize
      };
    }
  ]);
}());
