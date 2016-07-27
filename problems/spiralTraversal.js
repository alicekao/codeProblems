module.exports = function (matrix) {
  var result = [];
  if (!matrix.length) return result;
  var jMax = matrix[0].length - 1;
  var iMax = matrix.length - 1;
  var iMin = 0;
  var jMin = 0;

  while (jMin <= jMax && iMin <= iMax) {
    for (var x = jMin; x <= jMax; x++) {
      result.push(matrix[iMin][x]);
    }
    iMin++;
    if (iMin < iMax) {
      for (var w = iMin; w <= iMax; w++) {
        result.push(matrix[w][jMax]);
      }
    }
    if (iMin < iMax) {
      for (var y = --jMax; y >= jMin; y--) {
      		result.push(matrix[iMax][y]);
      }
    }
    if (jMin < jMax) {
      for (var z = --iMax; z >= iMin; z--) {
        result.push(matrix[z][jMin]);
      }
    }
    jMin++;
  }

  return result;
}