module.exports = function(array, comparator){
  comparator = comparator || function(a,b) {return a<b;};
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (comparator(array[i].value, array[j].value)) {
        var removed = array.splice(i, 1);
        array.splice(j, 0, removed[0]);
      }
    }
  }
  return array;
};