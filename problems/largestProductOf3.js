module.exports = function(arr) {
  if (arr.length === 0) {
    return null;
  }
  arr.sort(function(a,b) {
    return a-b;
  });
  var lastI = arr.length-1;
  return Math.max(arr[0]*arr[1]*arr[lastI], arr[lastI]*arr[lastI-1]*arr[lastI-2]);
};

[0,5,2,6]
[-2,0,1,-5]

//sort arr in ascending order
//
//Take the larger of:
//product of values at index 0, 1, and last
//product of last three values
//
//Inputs: array of numbers
//Output: number
//
//Edge cases:
//arr length < 3 => return product of nums
//arr length 0 => return null
//
var largestProductOf3 = function(arr) {
  if (!arr.length) {
    return null;
  }
  if (arr.length < 3) {
    arr.reduce(function(prev, curr) {
      return prev * curr;
    });
  }
  arr.sort(function(a,b) {
    return a-b;
  });
  var productOfTwoNegatives = arr[0] * arr[1] * arr[arr.length-1];
  var productOf3Largest = arr[arr.length-1] * arr[arr.length-2] * arr[arr.length-3];
  return Math.max(productOf3Largest, productOfTwoNegatives);
};
