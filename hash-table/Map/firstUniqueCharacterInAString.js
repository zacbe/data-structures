/**
 * Given a string s, find the first non-repeating character in it and
 * return its index. If it does not exist, return -1.
 */

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  // 1. Create a map
  const map = new Map();

  // 2. Traverse the string and track occurences
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      const { count } = map.get(char);
      map.set(char, { count: count + 1, idx: i });
    } else {
      map.set(char, { count: 1, idx: i });
    }
  }

  // 3. Traverse the map and look for values of 1
  for (const [, value] of map) {
    if (value.count === 1) {
      return value.idx;
    }
  }

  return -1;
}

// const s = "leetcode";
// const s = "loveleetcode";
const s = "aabb";

const res = firstUniqChar(s);
console.log({ res });
