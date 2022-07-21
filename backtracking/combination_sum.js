/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  function dfs(nums, start, remaining, path) {
    if (remaining === 0) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      const num = nums[i];
      if (remaining - num < 0) continue;
      path.push(num);
      dfs(nums, i, remaining - num, path);
      path.pop();
    }
  }
  const res = [];
  dfs(candidates, 0, target, []);
  return res;
};
