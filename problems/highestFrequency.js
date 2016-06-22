"use strict"
module.exports = str => {
  let result = [];
  let storage = {};
  for (let i = 0; i < str.length; i++) {
    storage[str[i]] = ++storage[str[i]] || 1;
  }
  let sorted = (Object.keys(storage).sort((a, b) => {
    return storage[b] - storage[a];
  })).forEach((key, i, arr) => {
    if (storage[key] === storage[arr[0]]) {
      result.push(key);
    }
  });
  return result.sort().join('');
};