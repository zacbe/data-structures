function MyHashSet() {
  this.size = 1000;
  this.table = new Array(this.size);
}

/**
 * Adds an element to the Hash Set
 *
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const hash = this.hash(key);
  this.table[hash] = key;
};

/**
 * Returns true if this set contains the specified element
 *
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const hash = this.hash(key);
  return this.table[hash] === key ? true : false;
};

/**
 * Removes an element to the Hash Set
 *
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const hash = this.hash(key);
  if (this.contains(key)) {
    this.table[hash] = undefined;
  }
};

/**
 * Generates a hash
 *
 * @param {*} key
 * @returns
 */
MyHashSet.prototype.hash = function (key) {
  return key % this.size;
};

// let obj = new MyHashSet();
// obj.add(0);
// obj.add(1);
// obj.add(2);
// obj.add(3);
// obj.remove(2);
// obj.remove(1);
// obj.remove(5);
// const param_3 = obj.contains(3);
