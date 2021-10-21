/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can
 * be replaced to get t.
 *
 * All occurrences of a character must be replaced with another
 * character while preserving the order of characters. No two
 * characters may map to the same character, but a character may
 * map to itself.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  const mapS = new Map();
  const mapT = new Map();

  // 1. Creating mapping of chars
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    // Map s => t
    if (!mapS.has(sChar)) {
      mapS.set(sChar, tChar);
    }

    // Map t => s
    if (!mapT.has(tChar)) {
      mapT.set(tChar, sChar);
    }

    // the current char in "s" should map to the current char in "t"
    // the current char in "t" should map to the current char in "s"
    if (mapS.get(sChar) !== tChar || mapT.get(tChar) !== sChar) {
      return false;
    }
  }

  console.log(mapS, mapT);

  return true;
}

// each character on "s" maps to one character in the same position on "t"
// e.g.
// e <=> a
// g <=> d

// const s = "egg";
// const t = "add";

// const s = "foo";
// const t = "bar";

const s = "paper";
const t = "title";

// const s = "badc";
// const t = "baba";

const res = isIsomorphic(s, t);
console.log({ res });
