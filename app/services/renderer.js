(function () {
  "use strict";

  app.service('stlRenderer', [

    function () {

      var canvas, renderPending = false;

      function init(c) {

        canvas = c;

        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        renderer.setClearColor(0xffffff);
      }

      function render() {

        //renderer.render(scene, camera);
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
