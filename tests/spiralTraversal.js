var expect = require('chai').expect;
var spiralTraversal = require('../problems/spiralTraversal');

describe('SpiralTraversal', () => {
  it('Should return an arr', ()=> {
    expect(spiralTraversal([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ])).to.deep.equal([ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]);
    expect(spiralTraversal([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ])).to.deep.equal([ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]);
  });
  it('Should handle edge cases', () => {
    expect(spiralTraversal([ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ])).to.deep.equal([1,2,3,4]);
    expect(spiralTraversal([ [ 1, 2, 3, 4, 5, 6, 7 ] ])).to.deep.equal([ 1, 2, 3, 4, 5, 6, 7 ]);
    expect(spiralTraversal([])).to.deep.equal([]);
  });
})