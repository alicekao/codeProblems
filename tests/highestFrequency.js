const expect = require('chai').expect;
const highestFreq = require('../problems/highestFrequency.js');

describe('Highest Frequency', () => {
  it('Returns highest frequency', () => {
    expect(highestFreq('abcdc')).to.equal('c');
    expect(highestFreq('occurring')).to.equal('cr');
    expect(highestFreq('xxyyzz')).to.equal('xyz');
    expect(highestFreq('ddqffbigoeuegjwarisuhb')).to.equal('bdefgiu');
  });
  it('Handles edge cases', () => {
    expect(highestFreq('')).to.equal('');
  });
});