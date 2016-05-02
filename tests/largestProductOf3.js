var expect = require('chai').expect;
var largestProduct = require('../problems/largestProductOf3');

describe('LargestProductOf3', function() {
  it('should return largest product', function() {
    expect(largestProduct([2,6,1,0])).to.equal(12);
    expect(largestProduct([-1,6,1,0])).to.equal(0);
    expect(largestProduct([-1,-2,1,0])).to.equal(2);
    expect(largestProduct([-1,0,0,0])).to.equal(0);
  });
  it('should handle edge cases', function() {
    expect(largestProduct([])).to.be.null;
  });
});
