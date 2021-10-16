/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 */

function Stack() {
  this.stack = [];
}

Stack.prototype.peek = function () {
  const top = this.stack.length - 1;
  return this.stack[top];
};

Stack.prototype.pop = function () {
  const top = this.stack.length - 1;
  this.stack.pop();
};

Stack.prototype.push = function (val) {
  this.stack.push(val);
};

Stack.prototype.isEmpty = function () {
  return this.stack.length === 0 ? true : false;
};

/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(string) {
  const stack = new Stack();
  for (const char of string) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" && !stack.isEmpty() && stack.peek() === "(") {
      stack.pop();
    } else if (char === "]" && !stack.isEmpty() && stack.peek() === "[") {
      stack.pop();
    } else if (char === "}" && !stack.isEmpty() && stack.peek() === "{") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.isEmpty();
}

const validString = "({[{}]})";
const invalidString = ")(}{][{}]})";

console.log(isValid(validString));
console.log(isValid(invalidString));
