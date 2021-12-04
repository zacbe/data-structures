/**
 *
 * @param {String} input
 * @returns {Boolean}
 */
function isPalindrome(input) {
  // base-case
  // an empty string or a single character is a palindrome
  if (input.length === 0 || input.length === 1) return true;

  // shrink the problem space
  // chars at first and last position are equal
  if (input.charAt(0) === input.charAt(input.length - 1)) {
    // shrink the input string
    const substring = input.substring(1, input.length - 1);
    return isPalindrome(substring);
  }
  // base-case no palindrome
  return false;
}

const input = "racecar";
const res = isPalindrome(input);
console.log(res);
