
describe('Math utilities', function () {

  it('should clamp a number less than the range', function () {

    var num = 4.5;
    num = num.clamp(5, 10);
    expect(num).toBeCloseTo(5);
  });

  it('should clamp a number greater than the range', function () {

    var num = 6.5;
    num = num.clamp(1.3, 4.2);
    expect(num).toBeCloseTo(4.2);
  });

  it('should not clamp a number inside the range', function () {

    var num = 6.5;
    num = num.clamp(1, 10);
    expect(num).toBeCloseTo(6.5);
  });
});
