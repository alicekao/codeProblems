var expect = require('chai').expect;
var deepEquality = require('../problems/deepEquality');

var a = {a: 1, b: 2};
var b = {a: 2, b: 2};
var c = {a: {c: 3, d: 1}, b: 2};
var d = {a: {c: 3, e: 1}, b: 2};
var e = {a: {c: {d: {f: {g: 1}}} 3, e: 1}, b: 2};

describe('DeepEquality', function() {
  it('should return true', function() {
    expect(deepEquality(3, 3)).to.be.true;
    expect(deepEquality(a, a)).to.be.true;
  });
  it('should return false', function() {
    expect(deepEquality(5, a)).to.be.false;
    expect(deepEquality(a, b)).to.be.false;
  });
    it('should return true for nested objs', function() {
    expect(deepEquality(c, c)).to.be.true;
    expect(deepEquality(d, d)).to.be.true;
    expect(deepEquality(e, e)).to.be.true;
  });
  it('should return false for nest objs', function() {
    expect(deepEquality(c, d)).to.be.false;
    expect(deepEquality(b, d)).to.be.false;
  });
  it('should handle edge cases', function() {
    expect(deepEquality(a, null)).to.be.false;
    expect(deepEquality(null, null)).to.be.true;
  });
});
