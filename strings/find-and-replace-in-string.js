/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
function findReplaceString(s, indices, sources, targets) {
  const substrings = new Map();
  for (let i = 0; i < indices.length; i++) {
    const start = indices[i];
    const end = start + sources[i].length;
    const sub = s.substring(start, end);

    if (sub === sources[i]) {
      substrings.set(start, { end: end - 1, sub: targets[i] });
    }
  }

  console.log({ substrings });

  let newS = "";
  for (let i = 0; i < s.length; i++) {
    if (substrings.has(i)) {
      const { sub, end } = substrings.get(i);

      newS += sub;
      i += end - i;
    } else {
      newS += s[i];
    }
  }

  return newS;
}

/**
 * Time O(1)
 * @param {*} str
 * @param {*} sub
 * @returns
 */
function hasSubString(str, sub) {
  //For case sensitive
  //let re = new RegExp(sub,"g");

  //for case insensitive
  let re = new RegExp(sub, "gi");

  return (str.match(re) || []).length !== 0;
}

function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}

const s = "jjievdtjfb";
const indices = [4, 6, 1];
const sources = ["md", "tjgb", "jf"];
const targets = ["foe", "oov", "e"];

const res = findReplaceString(s, indices, sources, targets);
console.log(res);
