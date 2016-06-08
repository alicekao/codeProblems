module.exports = function(arr, sub) {
  var isSubset = true;
  sub.forEach(function(val) {
    var foundI = arr.indexOf(val);
    if (foundI > -1) {
      arr.splice(foundI, 1);
    } else {
      isSubset = false;
    }
  });
  return isSubset;
};
