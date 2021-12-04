/**
 *
 * @param {Number} input
 * @returns {Number}
 */
function recursiveSummation(input) {
  // base case
  if (input <= 1) return input;

  // reduce the input by one on each iteration
  return recursiveSummation(input - 1) + input;
}

const input = 10;
const res = recursiveSummation(10);
console.log(res);
