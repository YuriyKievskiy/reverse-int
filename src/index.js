module.exports = function reverse (n) {
  let sum = String(n);
  sum = sum.replace(/[^0-9]/g, '');
  arrNum = sum.split('');
  arrReversed = arrNum.reverse();
  let rev = arrReversed.join('');
  rev = Number(rev);
  return rev;
}