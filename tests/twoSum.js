const twoSum = require('../problems/twoSum');
const expect = require('chai').expect;

describe('TwoSum', () => {
  it('Should return an arr of indices', () => {
    expect(twoSum([2,7,11,15], 9)).to.eql([0,1]);
    expect(twoSum([3,2,4], 6)).to.eql([1,2]);
  });
  it('Should return null for no results', () => {
    expect(twoSum([2,7,11,15], 16)).to.be.null;
    expect(twoSum([3,2,4,8], 15)).to.be.null;
  });
  it('Should handle edge cases', () => {
    expect(twoSum([], 3)).to.be.null;
    expect(twoSum([], 0)).to.be.null;
  });
})