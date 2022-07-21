/**
 *
 * https://leetcode.com/problems/subsets/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];
  function dfs(start, path) {
    if (start === nums.length) {
      return;
    }
    path.push(nums[start]);
    res.push([...path]);
    dfs(start + 1, path);
    path.pop();
    dfs(start + 1, path);
  }
  dfs(0, []);
  return res;
};
