var expect = require('chai').expect;
var teleWords = require('../problems/telephoneWords');

describe('TelephoneWords', () => {
  it('Should return all permutations', () => {
    expect(teleWords('02')).to.deep.equal([ "0A", "0B", "0C" ]);
    expect(teleWords('0002')).to.deep.equal([ "000A", "000B", "000C" ]);
    expect(teleWords('000')).to.deep.equal([ "000" ]);
    expect(teleWords('1234')).to.deep.equal([ "1ADG", "1ADH", "1ADI", "1AEG", "1AEH", "1AEI", "1AFG", "1AFH", "1AFI", "1BDG", "1BDH", "1BDI", "1BEG", "1BEH", "1BEI", "1BFG", "1BFH", "1BFI", "1CDG", "1CDH", "1CDI", "1CEG", "1CEH", "1CEI", "1CFG", "1CFH", "1CFI" ]);
    expect(teleWords('1123')).to.deep.equal([ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]);
  });
  it('Should handle edge cases', () => {
    expect(teleWords('')).to.deep.equal([]);
  });
});