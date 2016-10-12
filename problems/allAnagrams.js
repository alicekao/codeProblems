module.exports = function(str) {
  if (!str.length) {
    return [];
  }
  var results = {};
  var innerFn = function(current, remaining) {
    if (current.length === str.length) {
      results[current] = true;
      return;
    }
    for (var i = 0; i < remaining.length; i++) {
      var letter = remaining[i];
      innerFn(current+letter, remaining.slice(0,i) + remaining.slice(i+1));
    }
  };
  innerFn('', str);
  return Object.keys(results);
};

/*
Input: string
Output: array of strings

Edge cases: 
  - empty string => []
  - no duplicates? no
  - Capital different than lower case? no

Time complexity: O(n^n)
*/