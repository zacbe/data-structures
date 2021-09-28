/**
 *
 * Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated,
 *  and only the integer part of the result is returned.
 *
 * Note: You are not allowed to use any built-in exponent function or operator
 * , such as pow(x, 0.5) or x ** 0.5.
 *
 * Constraints:
 * 0 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0;
  let right = x;
  let root = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      // look on the left side
      left = mid + 1;
      root = mid;
    } else {
      // look on the right side
      right = mid - 1;
    }
  }

  return root;
};

const root = mySqrt(8);
console.log(root);
