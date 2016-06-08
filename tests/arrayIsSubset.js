var expect = require('chai').expect;
var isSubset = require('../problems/arrayIsSubset.js');

describe('Array is Subset of', function() {
  it('returns true for a subset', function() {
    expect(isSubset([1,2,3,4], [2,3,4])).to.be.true;
    expect(isSubset([1,2,true,4], [2,true,1])).to.be.true;
    expect(isSubset([1], [1])).to.be.true;
  });
  it('returns false for not a subset', function() {
    expect(isSubset([1,2,6], ['a'])).to.be.false;
    expect(isSubset([1,2, 'b'], [0])).to.be.false;
    expect(isSubset([1,2, 'b'], [1,2,3])).to.be.false;
  });
  it('handles duplicates', function() {
    expect(isSubset([1,1,2], [1,2])).to.be.true;
    expect(isSubset([1,1,2,3], [1,1,2])).to.be.true;
    expect(isSubset([1,0,2,3], [1,1,2])).to.be.false;
  });
  it('handles edge cases', function() {
    expect(isSubset([1,'a', 0], [])).to.be.true;
    expect(isSubset([], [])).to.be.true;
    expect(isSubset([], [false])).to.be.false;
  });
});
