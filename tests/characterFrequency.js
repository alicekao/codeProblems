var expect = require('chai').expect;
var charFreq = require('../problems/characterFrequency');

describe('CharacterFrequency', () => {
  it('Should return an arr of arrs sorted', () => {
    expect(charFreq("aaabbc")).to.deep.equal([ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]);
    expect(charFreq("mississippi")).to.deep.equal([ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]);
    expect(charFreq("popopo")).to.deep.equal([['o',3],['p',3]]);
  });
  it('Should handle edge cases', () => {
    expect(charFreq('')).to.deep.equal([]);
  })
})