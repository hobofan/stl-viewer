(function () {
  "use strict";

  app.service('stlCamera', ['stlModes', 'stlMouse', 'stlLights',

    function (stlModes, stlMouse, stlLights) {

    	var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
      var scale = 1.25, height = 1, width = 1;

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

        stlLights.update(rotation);
	    }

	    function move() {
	    	if (!stlMouse.isMousePressed()) {
	    		return;
	    	}

        var delta = stlMouse.delta();
        var downPt = stlMouse.downPoint();

        var smallerSide = width < height ? width : height;
        var m;

	    	if (stlModes.shouldRotate()) {

          m = (Math.PI / 180.0) * 0.3;

      		rotation.multiply(quat().setFromAxisAngle(vec3(0, 1, 0), -delta.X * m));
      		rotation.multiply(quat().setFromAxisAngle(vec3(1, 0, 0), -delta.Y * m));

          stlLights.update(rotation);

	    	} else if (stlModes.shouldPan()) {

          m = 2 * zoom / smallerSide;
          translation.add(vec2(delta.X, -delta.Y).multiplyScalar(m));

	    	} else if (stlModes.shouldZoom()) {

          var lastZoom = zoom;

          zoom *= delta.Y < 0 ? 0.9 : 1.1;
          zoom = zoom.clamp(0.05, 20);

          m = 2 * (lastZoom - zoom) / smallerSide;
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

        camera.left = (-zoom * hAspect - translation.x) * scale * rad;
        camera.right = (zoom * hAspect - translation.x) * scale * rad;
        camera.top = (zoom * vAspect - translation.y) * scale * rad;
        camera.bottom = (-zoom * vAspect - translation.y) * scale * rad;
        camera.near = -rad*2;
        camera.far = rad*2;

        camera.updateProjectionMatrix();
      }

      return {
      	camera: camera,
      	update: update,
      	orient: orient,
        resize: resize,
        move: move
      };
    }
  ]);
}());
