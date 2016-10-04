var Hashtable = function (size) {
  var count = 0;
  var max = size;
  var storage = new Array(size);
  this.size = function () {
    return count;
  }

  var insert = function (k, v) {
    var i = getIndexBelowMaxForKey(k, max);
    var bucket = storage[i] || [];
    var found = false;
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        bucket[j][1] = v;
        found = true;
        return;
      }
    }
    if (!found) {
      bucket.push([k, v]);
      count++;
    }
    storage[i] = bucket;
    if (count / max > 0.75) {
      resize(max*2, storage);
    }
  }
  this.insert = insert;

  this.retrieve = function (k) {
    var i = getIndexBelowMaxForKey(k, max);
    var bucket = storage[i] || [];
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) { return bucket[j][1]; }
    }
    return null;
  };

  this.remove = function(k) {
    var i = getIndexBelowMaxForKey(k, max);
    var bucket = storage[i] || [];
    var newBucket = [];
    var found = null;
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        found = bucket[j][1];
      } else {
        newBucket.push(bucket[j]);
      }
    }
    storage[i] = newBucket;
    found ? count-- : null;
    return found;
  }

  function resize(newLimit) {
    var oldStorage = storage;
    storage = new Array(newLimit);
    count = 0;
    max = newLimit
    oldStorage.forEach(function(bucket) {
      bucket.forEach(function(duple) {
        insert(duple[0], duple[1]);
      });
    });
  }
}

var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = Hashtable;