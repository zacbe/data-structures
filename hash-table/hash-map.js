function MyHashMap() {
  this.size = 10;
  this.table = new Array(this.size);
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this.hash(key);

  if (this.table[hash] && this.table[hash][0] === key) {
    this.table[hash][1] = value;
  }

  this.table[hash] = [key, value];
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this.hash(key);
  if (this.table[hash] && this.table[hash][0] === key) {
    return this.table[hash][1];
  }

  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this.hash(key);
  if (this.table[hash] && this.table[hash][0] === key) {
    return (this.table[hash] = undefined);
  }
};

/**
 *
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.hash = function (key) {
  return key % this.size;
};

var obj = new MyHashMap();

// obj.put(1, 2);
// obj.put(2, 5);
// obj.put(3, 5);
// obj.put(4, 5);
// obj.put(5, 5);
// var param_2 = obj.get(2);
// obj.remove(4);
