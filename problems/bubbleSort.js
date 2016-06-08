module.exports = function(input) {
  for (var end = input.length; end >= 0; end--) {
    for (var i = 0; i < end-1; i++) {
      if (input[i] > input[i+1]) {
        swap(input, i, i+1);
      }
    }
  }
  return input;
};

function swap(arr, indexA, indexB) {
  var saved = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = saved;
}
