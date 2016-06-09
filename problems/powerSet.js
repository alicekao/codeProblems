//returns all possible subsets of a string, sorted alphabetically
module.exports = function(string) {
  var result = [];
  var recurse = function(segment) {
    if (result.indexOf(segment) < 0) {
      result.push(segment);
    }
    for (var i = 0; i < segment.length; i++) {
      var slice = segment.slice(0, i) + segment.slice(i+1);

      recurse(slice);
    }
  };
  recurse(duplicatesRemoved(string));
  result.forEach(function(str, i, arr) {
    arr[i] = str.split('').sort().join('');
  });
  return result.sort();
};

function duplicatesRemoved(str) {
  var result = ''
  str.split('').forEach(function(ltr) {
    if (result.indexOf(ltr) < 0) {
      result += ltr;
    }
  });
  return result;
}
