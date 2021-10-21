/**
 * Template for using hash map to find duplicates.
 *
 * @param {Array} keys
 * @returns
 */
function aggregateByKey(keys) {
  const map = new Map();

  let needed_information = "";

  for (const key of keys) {
    if (map.has(key)) {
      if (map.get(key) /* satisfies the requirement */) {
        return needed_information;
      }
    }

    map.set(key, "value");
  }

  return needed_information;
}
