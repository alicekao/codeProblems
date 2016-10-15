Array.prototype.sameStructureAs = function(a2) {
  let isSame = true;
  (function recurse(arr1, arr2){
    if (!arr1 || !arr2) {
      isSame = false;
      return;
    }
    if (arr1.length !== arr2.length) {
      isSame = false;
      return;
    }
    arr1.forEach((el, i) => {
      if (Array.isArray(el)) {
        if (Array.isArray(arr2[i])) {
          recurse(el, arr2[i]);
        } else {
          isSame = false;
        }
      }
    });
  })(this, a2);
  return isSame;
}

// Can't use arrow function, this binds to an empty obj