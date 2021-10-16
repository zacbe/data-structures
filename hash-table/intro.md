# Hash Table

**Hash Table** is a data structure which organizes data using hash functions in order to support quick insertion and search.

There are two different kinds of hash tables: `hash set` and `hash map`.

- The `hash set` is one of the implementations of a `set` data structure to store _no repeated values_.
- The `hash map` is one of the implementations of a `map` data structure to store _(key, value) pairs_.

It is easy to use a hash table with the help of standard template libraries. Most common languages such as `Java`, `C++` and `Python` support both hash set and hash map.

By choosing a proper hash function, the hash table can achieve wonderful performance in both insertion and search.

## 1. Hash Function

The hash function is the most important component of a hash table which is used to map the key to a specific bucket. In the example in previous article, we use `y = x % 5` as a hash function, where `x` is the key value and `y` is the index of the assigned bucket.

## 2. Collision Resolution

Ideally, if our hash function is a perfect one-one mapping, we will not need to handle collisions. Unfortunately, in most cases, collisions are almost inevitable. For instance, in our previous hash function `(y = x % 5)`, both `1987` and `2` are assigned to bucket `2`. That is a collision.

A collision resolution algorithm should solve the following questions:

- How to organize the values in the same bucket?
- What if too many values are assigned to the same bucket?
- How to search a target value in a specific bucket?

# Map and Set in javascript

## Map

The `Map` object holds `key-value` pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

A `Map` object iterates its elements in insertion order — a for...of loop returns an array of `[key, value]` for each iteration.

```javascript
const map = new Map();

// Set key-value pair
map.set("a", 1);

// Get value for key "a" - value: 1
map.get("a");

// Return true if the key exist
map.has("a");

// Get size of the Map - size: 1
map.size;

// Delete an element by key
map.delete("a");

// Removes all key-value pairs
map.clear();
```

### Key equality

- Key equality is based on the sameValueZero algorithm.
- `NaN` is considered the same as `NaN` (even though `NaN !== NaN`) and all other values are considered equal according to the semantics of the `===` operator.
- In the current ECMAScript specification, `-0` and `+0` are considered equal, although this was not so in earlier drafts.

[learn more...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

## Set

The Set object lets you store unique values of any type, whether primitive values or object references.

`Set` objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the `Set` **may only occur once**; it is unique in the `Set's` collection.

```javascript
const set = new Set();

// Add new element to the Set
set.add(1);

// Searches for a value in the Set
set.has(1); // true

// Get size of the Set
set.size; // 1

// Removes 1 from the set
set.delete(1);

// Removes all elements from Set
set.clear();
```

### Value equality

Because each value in the `Set` has to be unique, the value equality will be checked. In an earlier version of ECMAScript specification, this was not based on the same algorithm as the one used in the `===` operator. Specifically, for Sets, `+0` (which is strictly equal to `-0`) and `-0` were different values. However, this was changed in the ECMAScript 2015 specification.

`NaN` and `undefined` can also be stored in a `Set`. All `NaN` values are equated (i.e. `NaN` is considered the same as `NaN`, even though `NaN !== NaN`).

[learn more...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
