var expect = require('chai').expect;
var insertionSort = require('../problems/insertionSort');

describe('InsertionSort', () => {
  it('Should return a sorted arr in constant space', () => {
    expect(insertionSort([{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}])).to.deep.equal([{value: 5, order: 1}, {value:5, order: 2}, {value:10}]);
    expect(insertionSort([ { "value": 3 }, { "value": 1 }, { "value": 2 } ]	)).to.deep.equal([ { "value": 1 }, { "value": 2 }, { "value": 3 } ]);
    expect(insertionSort([ { "value": 10 }, { "value": 5, "order": 1 }, { "value": 5, "order": 2 } ])).to.deep.equal([ { "value": 5, "order": 1 }, { "value": 5, "order": 2 }, { "value": 10 } ]);
  });
})