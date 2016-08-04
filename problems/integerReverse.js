module.exports = function(int) {
  let num = 0;
  let len = 1;
  let curr = 1;
  while (len <= int/10) {
    len*=10;
  }
  while (len>=1) {
    const place = Math.floor(int/len);
    num += place*curr;
    int-=place*len;
    len = len/10;
    curr*=10;
  }
  return num;
}