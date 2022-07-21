// https://leetcode.com/problems/permutations/

var permute = function (nums) {
  function dfs(path, used, res) {
    if (path.length === nums.length) {
      return res.push(path.slice());
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path, used, res);
      path.pop();
      used[i] = false;
    }
  }
  let res = [];
  nums = [...nums];
  dfs([], new Array(nums.length).fill(false), res);
  return res;
};
