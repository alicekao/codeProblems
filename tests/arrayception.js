const expect = require('chai').expect;
var arrayception = require('../problems/arrayception');

describe('Arrayception', function() {
  it('Should find most nested level', function() {
    expect(arrayception([[5]])).to.equal(2);
    expect(arrayception([[2, [3]]])).to.equal(3);
    expect(arrayception([1, 5, 6])).to.equal(1);
  });
  it('Should not count empty arrays', function(){
    expect(arrayception([1, [2], [[]]])).to.equal(2);
    expect(arrayception([[5], [[]]])).to.equal(2);
  });
  it('Should handle edge cases', function() {
    expect(arrayception([])).to.equal(0);
    expect(arrayception([[[]]])).to.equal(0);
  });
})
