const expect = require('chai').expect;
const isBalanced = require('../problems/isBTBalanced');

var tree = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

describe('isBTBalanced', () => {
  const test = new tree(5);
  const three = new tree(3);
  const seven = new tree(7);
  const eight = new tree(8);
  const nine = new tree(9);
  test.left = three;
  test.right = seven;
  seven.right = eight;
  eight.right = nine;
  
  it('Should return a boolean', () => {
    expect(isBalanced(test)).to.equal(false);
    eight.right = null;
    expect(isBalanced(test)).to.equal(true);
  });
  it('Should handle edge cases', () => {
    expect(isBalanced(new tree(5))).to.equal(true);
  })
})