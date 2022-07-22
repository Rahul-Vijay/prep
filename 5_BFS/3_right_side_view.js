/**
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  if (!root) return res;
  let q = [root];
  while (q.length > 0) {
    const n = q.length;
    // push the rightmost
    res.push(q[0].val);
    for (let i = 0; i < n; i++) {
      // dequeue
      const node = q.shift();
      // enqueue
      for (const child of [node.right, node.left]) {
        if (child) q.push(child);
      }
    }
  }
  return res;
};
