/**
 *
 * @param {Number} n
 * @returns {Number}
 */
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

/**
 *
 * @param {Number} n
 * @returns {Number}
 */
function fibMemo(n, cache = { 0: 0, 1: 1 }) {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = fibMemo(n - 1, cache) + fibMemo(n - 2, cache);
    return cache[n];
  }
}

console.log(fib(6));
console.log(fibMemo(6));
