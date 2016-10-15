const expect = require('chai').expect;
const nestedArray = require('../problems/nestedArrays');

describe('Nested Arrays', () => {
  it('Should return a boolean', () => {
    expect([1,1,1].sameStructureAs([2,2,2])).to.be.true;
    expect([1,[1,1]].sameStructureAs([2,[2,2]])).to.be.true;
    expect(![1,[1,1]].sameStructureAs([[2,2],2])).to.be.true;
    expect(![1,[1,1]].sameStructureAs([2,[2]])).to.be.true;

    expect([[[],[]]].sameStructureAs([[[],[]]])).to.be.true;
    expect(![[[],[]]].sameStructureAs([[1,1]])).to.be.true;

    expect([1,[[[1]]]].sameStructureAs([2,[[[2]]]])).to.be.true;

    expect(![].sameStructureAs(1)).to.be.true;
    expect(![].sameStructureAs({})).to.be.true;

    expect([1,'[',']'].sameStructureAs(['[',']',1])).to.be.true;
  });
});