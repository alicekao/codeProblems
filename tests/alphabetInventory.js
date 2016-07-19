const expect = require('chai').expect;
const alphabetInventory = require('../problems/alphabetInventory');

describe('alphabetInventory', function() {
  it('Should count letters', function() {
    expect(alphabetInventory('abc', 'aabbccdd')).to.equal('a:2,b:2,c:2');
    expect(alphabetInventory('x', 'Racer X is my friend :')).to.equal('x:1');
  });
  it('Should not take case into account', function() {
    expect(alphabetInventory('aBc', 'aabbccdd')).to.equal('a:2,b:2,c:2');
  });
  it('Should handle edge cases', function() {
    expect(alphabetInventory('123', 'adsfasdfasdf')).to.equal('no matches');
    expect(alphabetInventory('', 'adjfa;l ljadff akdj')).to.equal('no matches');
  });
})