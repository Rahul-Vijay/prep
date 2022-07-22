/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  if (!root) return res;
  const q = [root];
  while (q.length > 0) {
    let nl = [];
    const n = q.length;
    for (let i = 0; i < n; i++) {
      // dequeue
      const node = q.shift();
      nl.push(node.val);
      // enqueue
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(nl);
  }
  return res;
};
