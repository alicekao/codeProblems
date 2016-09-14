const removeDoubles = (str) => {
  if (!str) return 'Empty String';
  for (let i=0; i<str.length; i++) {
    if (str[i]===str[i+1]) {
      return removeDoubles(str.slice(0,i)+str.slice(i+2));
    }
  }
  return str;
}

module.exports = removeDoubles;