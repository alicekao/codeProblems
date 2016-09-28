const expect = require('chai').expect;
const flatten = require('../problems/flattenArr');

describe('FlattenArr', () => {
  it('Should flatten arrs', () => {
    expect(flatten([ [ 10 ], [ 20, 30 ], [ 40 ] ])).to.eql([10, 20, 30, 40]);
    expect(flatten([ 1, 2, [ 3 ], 4, [ 5, [ 6 ], 7 ] ])).to.eql([1,2,3,4,5,6,7]);
  });
  it('Should handle edge cases', () => {
    expect(flatten([])).to.eql([]);
    expect(flatten([[[[[[2]]]]]])).to.eql([2]);
  });
})