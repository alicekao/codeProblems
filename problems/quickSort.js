// const quickSort = (arr) => {
//   if (arr.length < 1) return arr;
//   const L = [], R = [], pivot = arr[arr.length - 1];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) { L.push(arr[i]); }
//     else { R.push(arr[i]); }
//   }
//   return quickSort(L).concat(pivot, quickSort(R));
// };

// in place
const quickSort = (arr, L = 0, R = arr.length - 1) => {
  if (R - L < 1) return arr;
  let pIndex = L, pVal = arr[R];
  for (let i = L; i < R; i++) {
    if (arr[i] < pVal) {
      swap(arr, i, pIndex++);
    }
  }
  swap(arr, R, pIndex);
  quickSort(arr, L, pIndex - 1);
  quickSort(arr, pIndex + 1, R);
  return arr;
};

const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]
};

module.exports = quickSort;