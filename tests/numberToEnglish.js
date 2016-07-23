var expect = require('chai').expect;
var numToEng = require('../problems/numberToEnglish');

describe('NumberToEnglish', () => {
  it('Should convert numbers to english', () => {
    expect(numToEng(30)).to.equal('thirty');
    expect(numToEng(70)).to.equal('seventy');
    expect(numToEng(27)).to.equal('twenty-seven');
    expect(numToEng(128)).to.equal('one hundred twenty-eight');
  });
  it('Should handle numbers < 20', () => {
    expect(numToEng(7)).to.equal('seven');
    expect(numToEng(0)).to.equal('zero');
    expect(numToEng(17)).to.equal('seventeen');
  });
  it('Should handle numbers < 1000', () => {
    expect(numToEng(700)).to.equal('seven hundred');
  })
  it('Should handle numbers > 1000', () => {
    expect(numToEng(2329)).to.equal('two thousand three hundred twenty-nine');
    expect(numToEng(90252)).to.equal('ninety thousand two hundred fifty-two');
    expect(numToEng(781935)).to.equal('seven hundred eighty-one thousand nine hundred thirty-five');
    expect(numToEng(1000000000000000)).to.equal('one quadrillion');
  });
});