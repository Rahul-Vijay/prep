function dfs(root, path, res) {
  if (root.children.length === 0) {
    // add to path
    path.push(root.val);
    const cp = path.join("->");
    res.push(cp);
    path.pop();
    return;
  }
  for (const child of root.children) {
    if (child) {
      path.push(root.val);
      dfs(child, path, res);
      path.pop();
    }
  }
}

function ternaryTreePaths(root) {
  let res = [];
  if (root) dfs(root, [], res);
  return res;
}
