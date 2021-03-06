// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = 0;
  let iterator = n.toString();
  const sums = new Set();

  while (sum !== 1) {
    sum = 0;
    for (const i of iterator) {
      sum += Math.pow(+i, 2);
    }

    if (sums.has(sum)) {
      return false;
    }

    sums.add(sum);
    iterator = sum.toString();
  }

  return true;
};

const n = 21;

const res = isHappy(n);
console.log(res);
