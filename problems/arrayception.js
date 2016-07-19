module.exports = function (arr) {
  var count = 0;
  var recurse = function (nested, currLevel) {
    if (!Array.isArray(nested)) {
      count = currLevel > count ? currLevel : count;
      return;
    }
    nested.forEach(function (cell) {
      recurse(cell, currLevel + 1);
    });
  }
  recurse(arr, 0);
  return count;
}