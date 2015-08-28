(function () {
  "use strict";

  app.service('stlScene', [

    function () {

      var scene = new THREE.Scene();
      var bbox = new THREE.Box3().setFromObject(scene);

      function getBox() {
        return bbox;
      }

      function add(obj) {

        scene.add(obj);
        bbox.setFromObject(scene);
      }

      function remove(obj) {

        scene.remove(obj);
        bbox.setFromObject(scene);
      }

      return {
        scene: scene,
        getBox: getBox,
        add: add,
        remove: remove
      };
    }
  ]);
}());
