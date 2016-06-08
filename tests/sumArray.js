var expect = require('chai').expect;
var sumArray = require('../problems/sumArray');

describe('sumArray', function() {
  it('should handle edge cases', function() {
    expect(sumArray([])).to.equal(0);
  });
  it('should return the largest contiguous sum', function() {
    expect(sumArray([-1, -2, -4])).to.equal(-1);
    expect(sumArray([-1, -2, 0])).to.equal(0);
    expect(sumArray([-1, 3, 5, -8, 0])).to.equal(8);
    expect(sumArray([1, 2, 3])).to.equal(6);
    expect(sumArray([4, -1, 5])).to.equal(8);
    expect(sumArray([ 1, 2, 3, -10, 4, 5, 6 ])).to.equal(15);
  })
});
