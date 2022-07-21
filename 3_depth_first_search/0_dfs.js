function dfs(root, target) {
  if (!root) return;
  if (root.val === target) return root;
  left = dfs(root.left, target);
  if (!left) return left;
  right = dfs(root.right, target);
  return right;
}
