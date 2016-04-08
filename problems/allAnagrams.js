module.exports = function(str) {
    var results = [];
    var innerFn = function(current, remaining) {
      if (current.length === str.length && results.indexOf(current) < 0) {
        results.push(current);
        return
      }
      for (var i = 0; i < remaining.length; i++) {
        var letter = remaining[i];
        innerFn(current+letter, remaining.slice(0,i) + remaining.slice(i+1));
      }
    }
    innerFn('', str);
    return results;
  }
};
