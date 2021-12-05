# Trees

Tree is a non-linear data structure. A tree can be represented using various primitive or user defined data types. To implement tree, we can make use of arrays, linked lists, classes or other types of data structures. It is a collection of nodes that are related with each other. To show the relation, nodes are connected with edges.

![General Tree structure](/img/general-tree.png)

## Terminology

- `Root` is the topmost node of the tree
- `Edge` is the link between two nodes
- `Child` is a node that has a parent node
- `Parent` is a node that has an edge to a child node
- `Leaf` is a node that does not have a child node in the tree
- `Height` is the length of the longest path to a leaf
- `Depth` is the length of the path to its root

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

## Definitions

### Rooted binary tree

A rooted binary tree has a root node and every node has at most two children.

### Full binary tree

A **full binary tree** is a tree in which every node has either `0 or 2 children`. Another way of defining a full binary tree is a recursive definition.

A full binary tree is either:

- A single vertex
- A tree whose root node has two subtrees, both of which are full binary trees

### Complete binary tree

In a **complete binary tree** every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between `1 and 2^h` nodes at the last level `h`. A complete binary tree can be efficiently represented using an array

### Perfect binary tree

A **perfect binary tree** is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level. A perfect tree is therefore always complete but a complete tree is not necessarily perfect.

### Infinite complete binary tree

In the **infinite complete binary tree**, every node has two children (and so the set of levels is countably infinite). The set of all nodes is countably infinite, but the set of all infinite paths from the root is uncountable, having the cardinality of the continuum. That's because these paths correspond by an order-preserving bijection to the points of the Cantor set, or (using the example of a `Stern–Brocot` tree) to the set of positive irrational numbers.

### Balanced binary tree

A **balanced binary tree** is a binary tree structure in which the left and right subtrees of every node `differ in height by no more than 1`. One may also consider binary trees where no leaf is much farther away from the root than any other leaf. (Different balancing schemes allow different definitions of "much farther".

### Degenerate binary tree

A **degenerate** (or pathological) tree is where each parent node has only one associated child node. This means that the tree will behave like a linked list data structure.

# BST

A `binary search tree` (BST), a special form of a binary tree, satisfies the binary search property:

- The value in each node must be `greater than` (or equal to) any values stored in its left subtree.
- The value in each node must be `less than` (or equal to) any values stored in its right subtree.

![Binary Search Tree](/img/bst.png)

> If there are `n` nodes in a binary search tree, maximum height of the binary search tree is `n-1` and minimum height is `ceil(log2n)`

```
7 node
max height = 7 - 1
min height = Math.ceil(Math.log2(7)) // 3
```

### Search

According to the property of BST, for each node:

1. return the node if the target value is equal to the value of the node;
2. continue searching in the left subtree if the target value is less than the value of the node;
3. continue searching in the right subtree if the target value is larger than the value of the node.

#### Example:

![Binary Search Tree](/img/search-bst.png)

### Insertion

Another common operation in BST is to `insert a new node`. The main idea is to find out a proper leaf position for the target node and then insert the node as a leaf. Therefore, insertion will begin as a search.

Similar to our search strategy, for each node, we will:

1. search the left or right subtrees according to the relation of the value of the node and the value of our target node;
2. repeat STEP 1 until reaching an external node;
3. add the new node as its left or right child depending on the relation of the value of the node and the value of our target node.

In this way, we add a new node and maintain the property of BST.

### Deletion

The solution is to replace the target node with a proper child. According to the number of its children, we should consider three different cases:

1. If the target node has no child, we can simply remove the node.
2. If the target node has one child, we can use its child to replace itself.
3. If the target node has two children, replace the node with its in-order successor or predecessor node and delete that node.

#### Case 1

![Binary Search Tree](/img/bst-deletion-case-1.png)

#### Case 2

![Binary Search Tree](/img/bst-deletion-case-2.png)

#### Case 3

![Binary Search Tree](/img/bst-deletion-case-3.png)
