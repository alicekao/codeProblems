var expect = require('chai').expect;
var lru = require('../problems/lru');

describe('LRU', () => {
  it('Should return a instance of a cache w/ methods', () => {
    const newLRU = new lru(5);
    expect(newLRU).to.be.an('object');
    expect(newLRU).to.be.an.instanceof(lru);
    expect(newLRU.get).to.be.a('function');
    expect(newLRU.set).to.be.a('function');
  });
  it('Should insert key values', () => {
    const newLRU = new lru(5);
    newLRU.set('apple', 1);
    newLRU.set('banana', 2);
    newLRU.set('grape', 3);
    expect(newLRU.get('apple')).to.equal(1);
    newLRU.set('bread', 4);
    newLRU.set('butter', 5);
    expect(newLRU.get('butter')).to.equal(5);
    newLRU.set('jelly', 6);
    expect(newLRU.get('jelly')).to.equal(6);
    console.log(newLRU.storage);
    expect(newLRU.get('apple')).to.equal(-1);
  });
  it('Should handle collisions', () => {
    const newLRU = new lru(5);
    newLRU.set('apple', 1);
    newLRU.set('banana', 2);
    newLRU.set('grape', 3);
    newLRU.set('bread', 4);
    newLRU.set('butter', 5);
    newLRU.set('banana', 6);
    newLRU.set('banana', 6);
    expect(newLRU.get('banana')).to.equal(6);
  });
});