// O(n) complexity
module.exports = (arr, target) => {
  const storage = {};
  arr.forEach((el, i) => {
    storage[el] = i;
  });
  for (let i = 0; i < arr.length; i++) {
    if (storage[target-arr[i]]) {
      return [i, storage[target-arr[i]]];
    }
  }
  return null;
}

// O(n^2) complexity
const bruteForce = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) { return [i, j]; }
    }
  }
  return null;
}