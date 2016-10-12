module.exports = function (alphabet, text) {
  const store = {};
  const newAlphabet = alphabet.toLowerCase();
  var result = [];

  text.toLowerCase().split('').forEach(function (ltr) {
    if (newAlphabet.indexOf(ltr) > -1) {
      store[ltr] = store[ltr] + 1 || 1;
    }
  });

  newAlphabet.split('').map(function (ltr) {
    store[ltr] ? result.push(ltr + ':' + store[ltr]) : null;
  })
  return result.join(',') || 'no matches';
}

/*
Input: alphabet (string), text (string)
Output: string

Edge cases:
  - no result => 'no matches'
  - empty alphabet || empty text => 'no matches'
  - case sensitive? no
  - numbers in alphabet? count digits only
  - spaces count as letters? no
*/