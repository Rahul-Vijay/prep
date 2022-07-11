// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

//  Return value: Total good nodes
// State: Max So FAR

var dfs = function (root, max_so_far) {
  // end condition
  if (!root) return 0;
  let total = 0;
  if (root.val >= max_so_far) total++;
  total += dfs(root.left, Math.max(root.val, max_so_far));
  total += dfs(root.right, Math.max(root.val, max_so_far));
  return total;
};

var goodNodes = function (root) {
  return dfs(root, Number.NEGATIVE_INFINITY);
};
