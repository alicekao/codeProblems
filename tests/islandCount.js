var expect = require('chai').expect;
var islandCount = require('../problems/islandCount.js');

describe('Island Count', function() {
  it('Should count 1 island', function() {
    expect(islandCount("0...0\n0...0\n00000")).to.equal(1);
  });
  it('Should count 2 islands', function() {
    expect(islandCount(".0...\n.00..\n...0")).to.equal(2);
  });
  it('Should count 5 islands', function() {
    expect(islandCount("0...0\n..0..\n0...0")).to.equal(5);
  });
  it('Should count 3 islands', function() {
    expect(islandCount("..000.\n..000.\n..000.\n.0....\n..000.")).to.equal(3);
  });
});
