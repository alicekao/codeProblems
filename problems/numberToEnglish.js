var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

var toEnglish = function (num) {
  if (num < 20 || num < 100 && num % 10 === 0) {
    return numbersToWords[num];
  }
  if (num < 100) {
    var place = Math.floor(num / 10);
    var remain = num % 10;
    return numbersToWords[place * 10] + '-' + numbersToWords[remain];
  }
  if (num < 1000) {
    var place = 100;
  } else {
    var place = 1000;
    while (place * 1000 <= num) {
      place *= 1000;
    }
  }
  var first = Math.floor(num / place);
  var remainder = num % place;
  var remaining = remainder ? ' ' + toEnglish(remainder) : '';
  return toEnglish(first) + ' ' + numbersToPlace[place] + remaining;
}

module.exports = toEnglish;