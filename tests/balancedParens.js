var expect = require('chai').expect;
var balancedParens = require('../problems/balancedParens');

describe('Balanced Parentheses', function() {
  it ('should return true for balanced parens', function() {
    expect(balancedParens("((()))()")).to.be.true;
    expect(balancedParens("(x + y) - (4)")).to.be.true;
    expect(balancedParens("(((10 ) ()) ((?)(:)))")).to.be.true;
  });
  it ('should return false for unbalanced parens', function() {
    expect(balancedParens("((()))(")).to.be.false;
    expect(balancedParens("(x / 0.5) - ((4)")).to.be.false;
    expect(balancedParens("(abc + 5) * (10)(")).to.be.false;
  });
  it ('should return false for unordered parens', function() {
    expect(balancedParens(")(")).to.be.false;
    expect(balancedParens("(z / 0.5) - )(7)")).to.be.false;
    expect(balancedParens("(10))(")).to.be.false;
  });
  it ('should return true for an empty string', function() {
    expect(balancedParens("")).to.be.true;
  });
});
