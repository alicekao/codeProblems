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
