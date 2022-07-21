// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Time complexity ==> O(n)

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
