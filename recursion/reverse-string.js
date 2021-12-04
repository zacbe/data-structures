// What is the base case? the empty string ""
// What is the smallest amount of work I can contribute?

/**
 *
 * @param {String} string
 * @returns {String}
 */
function reverseString(string) {
  if (string === "") return string;

  //                 string - first letter  + first letter
  return reverseString(string.substring(1)) + string.charAt(0);
}

const string = "hello";
const res = reverseString(string);
console.log(res);
