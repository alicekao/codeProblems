module.exports = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var maxSum = arr[0];
  var currentCount;
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    currentCount = (currentCount) ? currentCount + num : num;
    maxSum = Math.max(maxSum, currentCount);
    if (currentCount < 0) {
      maxSum = Math.max(maxSum, currentCount);
      currentCount = undefined;
    }
  }
  return currentCount === undefined ? maxSum : Math.max(maxSum, currentCount);
};
