var expect = require('chai').expect;
var powerSet = require('../problems/powerSet.js');

describe('Power Set', function() {
  it('should return a powerset sorted alphabetically', function() {
    expect(powerSet('a')).to.eql([ "", "a" ]);
    expect(powerSet('ab')).to.eql([ "", "a", "ab", "b" ]);
    expect(powerSet('horse')).to.eql([ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]);
  });
  it('should handle edge cases', function() {
    expect(powerSet('')).to.eql(['']);
  });
});
