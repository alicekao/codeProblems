module.exports = arr => {
  for (let i=1; i<arr.length; i++) {
    let replaced = false;
    for (let j=0; j<i && !replaced; j++) {
      if (arr[i]<arr[j]) {
        let removed = arr.splice(i,1);
        arr.splice(j,0,removed[0]);
        replaced=true;
      }
    }
  }
  return arr;
}