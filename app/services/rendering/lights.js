(function () {
  "use strict";

  app.service('stlLights', [

    function () {

      var light1, light2, lightPos1, lightPos2;

      function createLight(color, pos) {

        var brightness = 0.8;
        var light = new THREE.DirectionalLight(color, brightness);
        light.position.copy(pos);
        return light;
      }

      lightPos1 = vec3(0, 0, 1);
      lightPos2 = vec3(1, 1, 0);

      light1 = createLight(0xffffff, lightPos1);
      light2 = createLight(0xffffff, lightPos2);

      function update(rotation) {

        light1.position.copy(lightPos1);
        light2.position.copy(lightPos2);

        light1.position.applyQuaternion(rotation);
        light2.position.applyQuaternion(rotation);
      }

      function getFirstLight() {
        return light1;
      }

      function getSecondLight() {
        return light2;
      }

      return {
        getFirstLight: getFirstLight,
        getSecondLight: getSecondLight,
        update: update
      };
    }
  ]);

}());