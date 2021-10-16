// Brute Force

/**
 *
 * @param {String[]} temperatures
 * @returns
 */
function dailyTemperaturesBrute(temperatures) {
  const result = [];

  for (let i = 0; i < temperatures.length; i++) {
    let curDay = temperatures[i];
    let daysCount = 0;

    for (let j = i + 1; j < temperatures.length; j++) {
      let nextDay = temperatures[j];
      // [i] has the current position
      // [j] has the position of the next element

      // the difference between [i] and [j] (j - i)
      // is the number of days until the temperature increased

      if (curDay < nextDay) {
        daysCount = Math.abs(j - i);
        break;
      }
    }
    result.push(daysCount);
  }
  return result;
}

function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (value) {
  this.stack.push(value);
};

Stack.prototype.pop = function () {
  this.stack.pop();
};

Stack.prototype.top = function () {
  const top = this.stack.length - 1;
  return this.stack[top];
};

/**
 *
 * @param {String[]} temperatures
 * @returns
 */
function dailyTemperatures(temperatures) {
  const results = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {}

  return results;
}

// const temperatures = [30, 60, 90];
// const temperatures = [30, 40, 50, 60];
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const arr = dailyTemperatures(temperatures);
console.log(arr);
