module.exports = function(capacity) {
  const storage = [];
  this.get = key => {
    let found = -1;
    storage.forEach(duple => {
      if (duple[0] === key) {
        found = duple[1];
      }
    });
    return found;
  };

  this.set = (key, value) => {
    storage.forEach((duple, i) => {
      if (duple[0] === key) {
        storage.splice(i, 1);
      }
    });
    if (storage.length < capacity) {
      storage.push([key, value]);
    } else {
      storage.shift();
      storage.push([key, value]);
    }
  };
}