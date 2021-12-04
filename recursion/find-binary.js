/**
 *
 * @param {Number} decimal
 * @param {String} result
 * @returns {String}
 */
function findBinary(decimal, result = "") {
  // base case
  if (decimal === 0) return result;

  result = (decimal % 2) + result;

  return findBinary(Math.floor(decimal / 2), result);
}

/**
 * Approach:
 *
 * 1. divide the number by '2' and keep the remainder (decimal % 2)
 * 2. keep repeating operation '1.' until the remainder equals '0'
 * 3. concatenate all the remainders
 *
 */

const input = 9;
const res = findBinary(input);
console.log(res);
