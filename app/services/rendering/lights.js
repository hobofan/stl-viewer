(function () {
  "use strict";

  app.service('stlLights', [

    function () {

      var light1, light2;

      function createLight(color, pos) {

        var brightness = 0.8;
        var light = new THREE.DirectionalLight(color, brightness);
        light.position.copy(pos);
        return light;
      }

      light1 = createLight(0xffffff, vec3(0, 0, -1));
      light2 = createLight(0xffffff, vec3(1, 1, 0));

      function update() {

      }

      return {
        light1: light1,
        light2: light2,
        update: update
      };
    }
  ]);

}());