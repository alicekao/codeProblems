var coins = [1, 2, 5, 10, 20, 50, 100, 200];

module.exports = function (total) {
  var result = 0;
  if (typeof total !== 'number' || !total) {
    return result;
  }

  var recurse = function (current, arr) {
    if (current === total) { return result++; }
    if (current > total) { return; }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > total) {
        return;
      }
      recurse(current + arr[i], arr.slice(i))
    }
  };
  recurse(0, coins);
  return result;
}