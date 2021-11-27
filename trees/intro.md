# Trees

Tree is a non-linear data structure. A tree can be represented using various primitive or user defined data types. To implement tree, we can make use of arrays, linked lists, classes or other types of data structures. It is a collection of nodes that are related with each other. To show the relation, nodes are connected with edges.

![General Tree structure](/img/general-tree.png)

### Relations in a Tree:

- `A` is the **root** of the tree
- `A` is **parent** of `B`, `C` and `D`
- `B` is **child** of `A`
- `B`, `C` and `D` are **siblings**
- `A` is **grand-parent** of `E`, `F`, `G`, `H` and `I`

### Properties of Tree:

- Every tree has a special node called the `root node`. The root node can be used to traverse every node of the tree. It is called root because the tree originated from root only.
- If a tree has `N vertices(nodes)` then the number of `edges` is always one less than the number of nodes(vertices) i.e `N-1`. If it has more than `N-1` edges it is called a `graph` not a `tree`.
- Every child has only a `single parent` but parent can have `multiple child`.

## General Tree

A `tree` is called a `general tree` when there is no constraint imposed on the hierarchy of the tree. In `General Tree`, each node can have infinite number of children. This tree is the super-set of all other types of trees. The tree shown in Fig 1 is a General Tree.

## Binary Tree

A `Binary Tree` is one of the most typical tree structure. As the name suggests, a binary tree is a tree data structure in which each node has `at most two children`, which are referred to as the left child and the right child.

![General Tree structure](/img/binary-tree.png)

## Sequential representation

```javascript
/**
 *        1
 *       / \
 *      2   3
 *     / \
 *    4   5
 */

const array = [1, 2, 3, 4, 5];


/**
 *        1
 *       / \
 *      2   3
 *         / \
 *        4   5
 */

const array = [1, 2, 3, null, null 4, 5];

/**
 *        1
 *       / \
 *      2   3
 *     /     \
 *    4       5
 */

const array = [1, 2, 3, 4, null, null, 5];

```

## BST

A `binary search tree` (BST), a special form of a binary tree, satisfies the binary search property:

- The value in each node must be `greater than` (or equal to) any values stored in its left subtree.
- The value in each node must be `less than` (or equal to) any values stored in its right subtree.

![Binary Search Tree](/img/bst.png)
