const removeDoubles = require('../problems/removeDoubles');
const expect = require('chai').expect;

describe('RemoveDoubles', () => {
  it('Should remove doubles', () => {
    expect(removeDoubles('aabccdd')).to.equal('b');
    expect(removeDoubles('aabbbcccdd')).to.equal('bc');
    expect(removeDoubles('aabaabcccdd')).to.equal('c');
    expect(removeDoubles('aaabccddd')).to.equal('abd');
  });
  it('Should return "Empty String" for an empty result', () => {
    expect(removeDoubles('aabbcc')).to.equal('Empty String');
    expect(removeDoubles('')).to.equal('Empty String');
  });
})