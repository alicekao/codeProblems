// Return an arr of arrs sorted in desc order by freq and asc order by char
module.exports = function(str) {
  var storage = {}
  str.split('').forEach(function(ltr) {
    storage[ltr] = storage[ltr] + 1 || 1;
  });
  return Object.keys(storage).sort(function(a,b) {
    if (storage[a] !== storage[b]) return storage[b]-storage[a];
    return a.charCodeAt(0)-b.charCodeAt(0);
  }).map(function(key) {
    return [key, storage[key]];
  });
}