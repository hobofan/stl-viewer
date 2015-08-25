
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

  it('should return a THREE.Vector2 from the vec2 function', function () {

    var v = vec2(1, 2);
    expect(v.x).toEqual(1);
    expect(v.y).toEqual(2);
  });

  // jshint multistr:true
  it('should return a vector with components set to 0 when no parameters are \
    passed into the vec2 function', function () {

    var v = vec2();
    expect(v.x).toEqual(0);
    expect(v.y).toEqual(0);
  });

  it('should return a THREE.Quaternion from the quat function', function () {

    var q = quat(1, 2, 3, 4);
    expect(q.x).toEqual(1);
    expect(q.y).toEqual(2);
    expect(q.z).toEqual(3);
    expect(q.w).toEqual(4);
  });

  // jshint multistr:true
  it('should return a unit quaternion when no parameters are passed into the \
    quat function', function () {

    var q = quat();
    expect(q.x).toEqual(0);
    expect(q.y).toEqual(0);
    expect(q.z).toEqual(0);
    expect(q.w).toEqual(1);
  });
});