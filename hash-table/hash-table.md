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
