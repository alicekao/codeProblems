const expect = require('chai').expect;
const selectionSort = require('../problems/selectionSort');

describe('SelectionSort', () => {
  it('Should return a sorted arr', () => {
    expect(selectionSort([20, -10, -10, 2, 4, 299])).to.eql([-10, -10, 2, 4, 20, 299]);
    expect(selectionSort([18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36])).to.eql([18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36, 36, 40]);
  });
  it('Should handle edge cases', () => {
    expect(selectionSort([])).to.eql([]);
  });
})