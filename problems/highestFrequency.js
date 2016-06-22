"use strict"
module.exports = str => {
  let result = '';
  let storage = {};
  for (let i = 0; i < str.length; i++) {
    storage[str[i]] = ++storage[str[i]] || 1;
  }
  let max = (Object.keys(storage).reduce((a,b) => {
    return a > storage[b] ? a : storage[b]
  }, 0));
  for (let j = 0; j < str.length; j++) {
    let ltr = str[j];
    if (storage[ltr] === max && result.indexOf(ltr) < 0) {
    result += ltr;
    }
  }
  return result;
};