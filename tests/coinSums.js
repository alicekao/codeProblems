var expect = require('chai').expect;
var coinSums = require('../problems/coinSums');

describe('CoinSums', () => {
  it('Should return all possible combinations', () => {
    expect(coinSums(17)).to.equal(28);
    expect(coinSums(5)).to.equal(4);
    expect(coinSums(6)).to.equal(5);
    expect(coinSums(10)).to.equal(11);
  });
  it('Should handle edge cases', () => {
    expect(coinSums(0)).to.equal(0);
    expect(coinSums(1)).to.equal(1);
    expect(coinSums('dog')).to.equal(0);
  });
})