const expect = require('chai').expect;
const btSubset = require('../problems/btSubset');

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const test = new Tree(8);
test.right = new Tree(5);
test.right.left = new Tree(1);
test.right.right = new Tree(2);
test.right.right.right = new Tree(7);

const testB = new Tree(5);
testB.left = new Tree(1);
testB.right = new Tree(2);

describe('btSubset', () => {
  it('Should return a boolean', () => {
    expect(btSubset(test, testB)).to.eql(false);
    test.right.right.right = null;
    expect(btSubset(test, testB)).to.eql(true);
  });
  it('Should handle edge cases', () => {
    const a = new Tree(0);
    const b = new Tree(0);
    expect(btSubset(null, null)).to.eql(true);
    expect(btSubset(a, b)).to.eql(true);
  });
});
