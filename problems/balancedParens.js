module.exports = function(string) {
  var leftParens = 0;
  var rightParens = 0;
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter === "(") {
      ++leftParens;
    } else if (letter === ")") {
      ++rightParens;
      if (rightParens > leftParens) {
        return false;
      }
    }
  }
  if (leftParens !== rightParens) {
    return false;
  }
  return true;
};

var areParensBalanced = function(string) {
  //loop through letters in string
    //if letter is (, increment left paren counter
    //if letter is ), increment right paren counter
    //if right paren counter > left paren counter, return false
  //If left paren counter is not equal to right paren counter, return false
  //Return true
}

//Inputs: a string
//Output: boolean
//
//Edge cases: empty string => true because parens are not unbalanced
//
//Example: "(abc)(a(1))" => true
//")(" => false
