var deepEquality = function(a, b) {
  if (!a || !b) {
    return a === b;
  }
  var isEqual = true;
  var checkNested = function(c, d) {
    if (Object.keys(c).length !== Object.keys(d).length) {
      isEqual = false;
    }
    for (key in c) {
      if (typeof key === "object") {
        checkNested(c[key], d[key]);
      }
    }
    if ( c !== d) {
      isEqual = false;
    }
  };
  checkNested(a, b);
  return isEqual;
};

module.exports = deepEquality;
