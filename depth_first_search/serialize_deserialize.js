var serialize_dfs = (root, res) => {
  if (!root) {
    res.push("x");
    return;
  }
  res.push(root.val);
  serialize_dfs(root.left, res);
  serialize_dfs(root.right, res);
};

var serialize = function (root) {
  let res = [];
  serialize_dfs(root, res);
  return res.join(" ");
};

var deserialize_dfs = (nodes) => {
  let val = nodes.next().value;
  if (val === "x") return;
  const current = new Node(parseInt(val, 10));
  current.left = deserialize_dfs(nodes);
  current.right = deserialize_dfs(nodes);
  return current;
};

var deserialize = function (data) {
  return deserialize_dfs(data.split(" ")[Symbol.iterator]());
};
