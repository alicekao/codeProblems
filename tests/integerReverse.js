const expect = require('chai').expect;
const integerReverse = require('../problems/integerReverse');

describe('IntegerReverse', () => {
  it('Should return reversed', () => {
    expect(integerReverse(1234)).to.equal(4321);
    // expect(integerReverse(158923)).to.equal(329851);
  });
  it('Should handle zeroes on ends', () => {
    // expect(integerReverse(100)).to.equal(1);
    // expect(integerReverse(150)).to.equal(51);
    // expect(integerReverse(0)).to.equal(0);
  });
});