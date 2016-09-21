const imports = require('../problems/BSTfromArr');
const Tree = imports.tree;
const BST = imports.BST;
const expect = require('chai').expect;

describe('BSTfromArr', () => {
  it('Should return a bst', () => {
    var tree = BST([0, 1, 3, 4, 5]);
    expect(tree.constructor).to.eql(Tree);
    expect(tree.val).to.equal(3);
    expect(tree.left.val).to.equal(1);
    expect(tree.left.left.val).to.equal(0);
    expect(tree.right.val).to.equal(5);
    expect(tree.right.left.val).to.equal(4);
    expect(tree.left.right).to.equal.null;
    expect(tree.right.left.left).to.equal.null;
    expect(tree.right.left.right).to.equal.null;
    expect(tree.right.right).to.equal.null;
  });
  it('Should handle even arrs', () => {
    var tree = BST([0, 1, 3, 4]);
    expect(tree.constructor).to.eql(Tree);
    expect(tree.val).to.equal(3);
    expect(tree.left.val).to.equal(1);
    expect(tree.left.left.val).to.equal(0);
    expect(tree.right.val).to.equal(4);
    expect(tree.left.right).to.equal.null;
    expect(tree.right.left).to.equal.null;
    expect(tree.right.right).to.equal.null;
  });
  it('Should handle edge cases', ()=> {
    var tree = BST([1,2]);
    expect(tree.val).to.equal(2);
    expect(tree.left.val).to.equal(1);
    expect(tree.right).to.equal.null;
    expect(tree.left.right).to.equal.null;
    expect(tree.left.left).to.equal.null;
  });
})