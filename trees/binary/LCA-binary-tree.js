// const mandatory = () => {
//   throw new Error("Missing param");
// };

// const printName = (name = mandatory()) => {
//   return name;
// };

/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given
 * nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * https://assets.leetcode.com/uploads/2018/12/14/binarytree.png
 */

/**
 *
 * @param {Node} root
 * @param {Node} p
 * @param {Node} q
 * @returns {Node}
 */
function lowestCommonAncestor(root, p, q) {
  return getPathToRoot(root, p, q);
}

function getPathToRoot(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;
  const leftNode = getPathToRoot(root.left, p, q);
  const rightNode = getPathToRoot(root.right, p, q);

  if (leftNode && rightNode) return root;
  if (leftNode) return rightNode;
  return leftNode;
}

/*
TreeNode* getPathToRoot(TreeNode* root, TreeNode* p, TreeNode* q) {
      if(root == NULL) return NULL;
      if(root == q || root == p) return root;
      TreeNode* left_node =  getPathToRoot(root->left,p,q);
      TreeNode* right_node = getPathToRoot(root->right,p,q);
      if(left_node != NULL && right_node != NULL) return root;
      if(left_node == NULL) return right_node;
      return left_node;
      
    }
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
      return getPathToRoot(root,p,q);
    }

*/
