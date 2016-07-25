var options = {
  0: ["0"],
  1: ["1"],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};

module.exports = function (str) {
  var arr = str.split('');
  var results = [];
  
  if (!str) {
    return results;
  }

  var recurse = function (curr, remaining) {
    if (!remaining.length) {
      return results.push(curr);
    }
    var firstOptions = options[remaining[0]];
    for (var i = 0; i<firstOptions.length; i++) {
      recurse(curr + firstOptions[i], remaining.slice(1));
    }
  };
  recurse('', str.split(''));
  return results;
}
//'', 2,3,4
//'A', 3,4
//'AE , 4