(function () {
  "use strict";

  app.service('stlRenderer', [

    function () {

      var canvas, renderPending = false, renderer;

      function init(c) {

        canvas = c;

        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        //renderer.setClearColor(0xffffff);
        renderer.setClearColor(0xff0000);
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
