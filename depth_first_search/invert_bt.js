// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function (root) {
  if (!root) return null;
  return TreeNode(root.val, invertTree(root.right), invertTree(root.left));
};
