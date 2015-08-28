(function () {
  "use strict";

  app.service('stlRenderer', ['stlCamera',

    function (stlCamera) {

      var canvas, renderPending = false, renderer;

      function init(c) {

        canvas = c;

        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setClearColor(0xffffff);
      }

      function render() {

        //renderer.render(scene, camera);
        renderer.clear(true, true, true);

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
