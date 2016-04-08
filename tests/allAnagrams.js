var expect = require('chai').expect;
var allAnagrams = require('../problems/allAnagrams');

describe('All Anagrams', function() {
  it('should return all possible anagrams', function() {
    expect(allAnagrams('abc')).to.eql(["abc", "acb", "bac", "bca", "cab", "cba"]);
  });
  it('should not return duplicate anagrams', function() {
    expect(allAnagrams('apps')).to.have.lengthOf(12);
  });
});
