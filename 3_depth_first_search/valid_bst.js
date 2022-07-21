// https://leetcode.com/problems/validate-binary-search-tree/

var isValidBST = function (root) {
  function dfs(root, min, max) {
    if (!root) return true;
    if (!(root.val > min && root.val < max)) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
