(function () {
  "use strict";

  app.service('stlRenderer', ['stlCamera', 'stlScene', 'stlLights',

    function (stlCamera, stlScene, stlLights) {

      var canvas, renderPending = false, renderer;

      function init(c) {

        canvas = c;

        renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setClearColor(0xffffff);

        stlScene.add(stlLights.getFirstLight());
        stlScene.add(stlLights.getSecondLight());
      }

      function render() {

        stlCamera.update(canvas.width / canvas.height, stlScene.getBox());

        renderer.clear(true, true, true);
        renderer.render(stlScene.scene, stlCamera.camera);

        renderPending = false;
      }

      function requestRender() {
        if (renderPending) {
          return;
        }

        window.requestAnimationFrame(render);
        renderPending = true;
      }

      function resize() {

        var pixelRatio = window.devicePixelRatio || 1;

        canvas.width = Math.round(canvas.clientWidth * pixelRatio);
        canvas.height = Math.round(canvas.clientHeight * pixelRatio);

        stlCamera.resize(canvas.width, canvas.height);

        renderer.setViewport(0, 0, canvas.width, canvas.height);
        requestRender();
      }

      return {
        init: init,
        resize: resize,
        requestRender: requestRender
      };
    }
  ]);
}());
