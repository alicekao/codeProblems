/*
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not.
 */

module.exports = function(num) {
  if (num === 2) return true;
  if (num < 2 || !(num%2)) { return false;}
  for (var i = 3; i < num/2; i=i+2) {
    if (!(num%i)) {
      return false;
    }
  }
  return true;
};
