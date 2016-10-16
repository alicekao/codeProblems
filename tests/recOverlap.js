const expect = require('chai').expect;
const recOverlap = require('../problems/recOverlap');

describe('Rectangle Overlap', () => {
  const rec = [[-5,5], [-5,0], [5,5], [5,0]];
  it('Should return the area of overlap', () => {
    expect(recOverlap([[0,0], [0,10], [10,10], [10,0], ...rec])).to.equal(25);
    expect(recOverlap([[0,-10], [0,10], [10,10], [10,-10], ...rec])).to.equal(25);
    expect(recOverlap([[-5,0], [-5,10], [10,10], [10,0], ...rec])).to.equal(50);
  });
  it('Should handle edge cases', () => {
    expect(recOverlap([[6,0],[6,1],[7,0],[7,1],...rec])).to.equal(0);
    expect(recOverlap([[-4,1],[-4,1],[-4,1],[-4,1],...rec])).to.equal(0);
    expect(recOverlap([[-4,1],[-4,4],[4,1],[4,4],...rec])).to.equal(24);
  });
});