var expect = require('chai').expect;
var isPrime = require('../problems/primeTester');

describe('primeTester', function() {
  it('should return false for 1', function() {
    expect(isPrime(1)).to.be.false;
  });
  it('should return false for 0', function() {
    expect(isPrime(0)).to.be.false;
  });
  it('should round non-integers', function() {
    expect(isPrime(1.6)).to.be.false;
  });
  it('should return true for prime numbers', function() {
    expect(isPrime(2)).to.be.true;
    expect(isPrime(3)).to.be.true;
    expect(isPrime(5)).to.be.true;
    expect(isPrime(11)).to.be.true;
    expect(isPrime(18)).to.be.false;
  });
  it('should return false for nonprime numbers', function() {
    expect(isPrime(4)).to.be.false;
    expect(isPrime(15)).to.be.false;
    expect(isPrime(102)).to.be.false;
    expect(isPrime(502034)).to.be.false;
  });
});
