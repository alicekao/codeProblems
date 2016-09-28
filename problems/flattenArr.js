const flatten = (arr) => {
  let flat = [];
  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat.push(...flatten(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}

module.exports = flatten;