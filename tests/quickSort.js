const expect = require('chai').expect;
const quickSort = require('../problems/quickSort');

describe('QuickSort', () => {
  it('Should sort arrays', () => {
    expect(quickSort([4,6,1,8,2,7,0])).to.eql([0,1,2,4,6,7,8]);
    expect(quickSort([-5,-1,-222,-6,0])).to.eql([-222,-6,-5,-1,0]);
    expect(quickSort([5,5,5,6,1])).to.eql([1,5,5,5,6]);
    expect(quickSort([9,8,7,6,5,4,3,2,1])).to.eql([1,2,3,4,5,6,7,8,9]);
  });
  it('Should handle edge cases', () => {
    expect(quickSort([])).to.eql([]);
    expect(quickSort([1])).to.eql([1]);
  });
});