module.exports = function(arr) {
  const storage = {};
  arr.forEach(function(val) {
    storage[val] = storage[val] + 1 || 1;
  });
  for (var i = 0; i< arr.length; i++) {
    if (!(storage[arr[i]]%2)) return arr[i];
  }
  return null;
}

/* 
Inputs: array of primitives
Output: primitive or null
Edge cases:
 - empty str => null
 - capital different than lower case? yes
 - none found => null
 */