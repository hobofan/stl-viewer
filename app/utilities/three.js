
function vec3(x, y, z) {
  "use strict";
  return new THREE.Vector3(x, y, z);
}

function vec2(x, y) {
  "use strict";
  return new THREE.Vector2(x, y);
}

function quat(x, y, z, w) {
  "use strict";
  return new THREE.Quaternion(x, y, z, w);
}

function quatFromAxisAngle(axis, angle) {
  "use strict";

  var q = new THREE.Quaternion();
  q.setFromAxisAngle(axis, angle);

  return q;
}