var expect = require('chai').expect;
var binarySearchArr = require('../problems/binarySearchArr.js');

describe('Binary Search Arr', () => {
  it('Should search arrays', () => {
    expect(binarySearchArr([1,4,6,8], 6)).to.equal(2);
    expect(binarySearchArr([0,4,7,12,36,678], 678)).to.equal(5);
    expect(binarySearchArr([1,4,6,8,9], 1)).to.equal(0);
    expect(binarySearchArr([11,12], 12)).to.equal(1);
  });
  it('Should return -1 for not found targets', () => {
    expect(binarySearchArr([1,3,7,32,53,643,6786,29283], 5)).to.equal(-1);
    expect(binarySearchArr([-1,6,23,34], 0)).to.equal(-1);
    expect(binarySearchArr([1,2], 3)).to.equal(-1);
  });
  it('Should handle edge cases', () => {
    expect(binarySearchArr([], 4)).to.equal(-1);
  })
})