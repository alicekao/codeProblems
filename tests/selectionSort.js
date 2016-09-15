const expect = require('chai').expect;
const selectionSort = require('../problems/selectionSort');

describe('SelectionSort', () => {
  it('Should return a sorted arr', () => {
    expect(selectionSort([20, -10, -10, 2, 4, 299])).to.eql([-10, -10, 2, 4, 20, 299]);
  });
  it('Should handle edge cases', () => {
    expect(selectionSort([])).to.eql([]);
  });
})