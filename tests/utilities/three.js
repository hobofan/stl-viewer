
describe('ThreeJS utilities', function () {

  it('should return a THREE.Vector3 from the vec3 function', function () {

    var v = vec3(1, 2, 3);
    expect(v.x).toEqual(1);
    expect(v.y).toEqual(2);
    expect(v.z).toEqual(3);
  });

  // jshint multistr:true
  it('should return a vector with components set to 0 when no parameters are \
    passed into the vec3 function', function () {

    var v = vec3();
    expect(v.x).toEqual(0);
    expect(v.y).toEqual(0);
    expect(v.z).toEqual(0);
  });
});