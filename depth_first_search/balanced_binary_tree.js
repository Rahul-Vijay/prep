// https://leetcode.com/problems/balanced-binary-tree/

var treeHeight = (tree) => {
  if (tree === null) return 0;
  let leftHeight = treeHeight(tree.left);
  let rightHeight = treeHeight(tree.right);
  if (leftHeight === -1 || rightHeight === -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
};

var isBalanced = function (root) {
  return treeHeight(root) !== -1;
};
