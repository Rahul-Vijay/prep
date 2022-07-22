/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  let q = [root];
  let depth = 0;
  while (q.length > 0) {
    depth++;
    const n = q.length;
    for (let i = 0; i < n; i++) {
      // dequeue
      const node = q.shift();
      if (!node.left && !node.right) return depth;
      // enqueue
      for (const child of [node.left, node.right]) {
        if (child) q.push(child);
      }
    }
  }
  return depth;
};
