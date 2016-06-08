var expect = require('chai').expect;
var bubbleSort = require('../problems/bubbleSort.js');

describe('Bubble Sort', function() {
  it('should sort arrays', function() {
    expect(bubbleSort([2,7,4,-1])).to.eql([-1,2,4,7]);
    expect(bubbleSort([2,-5,-2,0,2])).to.eql([-5,-2,0,2,2]);
    expect(bubbleSort([20,299,-2,0,-10])).to.eql([-10,-2,0,20,299]);
  });
});
