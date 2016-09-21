const Tree = require('../problems/treedfselect');
const expect = require('chai').expect;

describe('TreeDFSelect', () => {
  it('DFSelect should exist on the prototype', () => {
    expect(Tree.prototype.DFSelect).to.be.a('function');
  });
  it('Returns a filtered array of values', () => {
    const myTree = new Tree(1);
    const first = myTree.addChild(2);
    const second = myTree.addChild(3);
    second.addChild(0);
    first.addChild(4);
    first.addChild(5);
    const sixth = first.addChild(6);
    sixth.addChild(7);
    const evenFilter = (value, depth) => {
      return value % 2 === 0;
    };
    const secondDepth = (value, depth) => {
      return depth === 2;
    };
    const all = (value, depth) => {
      return true;
    }
    expect(myTree.DFSelect(evenFilter)).to.eql([2,4,6,0]);
    expect(myTree.DFSelect(secondDepth)).to.eql([4,5,6,0]);
    expect(myTree.DFSelect(all)).to.eql([1,2,4,5,6,7,3,0]);
  });
})