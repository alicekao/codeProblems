const expect = require('chai').expect;
const pathsWSum = require('../problems/pathsWSum');

class BTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('Paths With Sum', () => {
  it('Should return sum of paths', () => {
    expect(pathsWSum(new BTree(3), 3)).to.equal(1);
    const fullTree = new BTree(1);
    fullTree.left = new BTree(2);
    expect(pathsWSum(fullTree, 3)).to.equal(1);
    fullTree.right = new BTree(3);
    expect(pathsWSum(fullTree, 3)).to.equal(2);
    fullTree.right.left = new BTree(-1);
    expect(pathsWSum(fullTree, 3)).to.equal(3);
    expect(pathsWSum(fullTree, -1)).to.equal(1);
    fullTree.right.right = new BTree(4);
    expect(pathsWSum(fullTree, 3)).to.equal(3);
    fullTree.right.right.left = new BTree(-1);
    expect(pathsWSum(fullTree, 3)).to.equal(4);
  });
  it('Should handle edge cases', () => {
    expect(pathsWSum(new BTree(0), 3)).to.equal(0);
  });
});