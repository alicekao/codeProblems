var expect = require('chai').expect;
var isPrime = require('../problems/primeTester');

describe('primeTester', function() {
  it('should return false for 1', function() {
    expect(isPrime(1)).to.be.false;
  });
  it('should return false for 2', function() {
    expect(isPrime(2)).to.be.true;
  });
});
