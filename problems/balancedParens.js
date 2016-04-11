module.exports = function(string) {
  var leftParens = 0;
  var rightParens = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter === "(") {
      ++leftParens;
    } else if (letter === ")") {
      ++rightParens;
    }
    if (rightParens > leftParens) {
      return false;
    }
  }
  if (leftParens !== rightParens) {
    return false;
  }
  return true;
};
