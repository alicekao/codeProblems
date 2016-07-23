var expect = require('chai').expect;
var evenOccurrence = require('../problems/evenOccurrence');

describe('EvenOccurrence', () => {
  it('Should return the first instance w/ an even occurrence', () => {
    expect(evenOccurrence([ 1, 1 ])).to.equal(1);
    expect(evenOccurrence([ 5, 6, 1, 1 ])).to.equal(1);
    expect(evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ])).to.equal(2);
    expect(evenOccurrence([ "cat", "dog", "dig", "cat" ])).to.equal('cat');
  });
  it('Should return null for no instances', () => {
    expect(evenOccurrence([ "cat", "cat", "dog", "dig", "cat" ])).to.be.null;
    expect(evenOccurrence([])).to.be.null;
    expect(evenOccurrence([1, 2])).to.be.null;
  });
})