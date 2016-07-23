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