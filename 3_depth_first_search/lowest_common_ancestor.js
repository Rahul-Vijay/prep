// Looked upon from the current node
// 5 cases
/**
 * 1. LCA is current node --> P,Q are children
 *
 * 2. LCA is current node --> Either P or Q is LCA
 *
 * 3. P,Q below current node and LCA above current node
 *
 * 4. P,Q is below current node and LCA is above current node
 *
 * 5. Current node is above LCA
 */

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return;
  //case 2
  if (root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  //case 1
  if (left && right) return root;

  // report back to parent
  if (left) return left;
  if (right) return right;

  // case 4
  return null;
};
