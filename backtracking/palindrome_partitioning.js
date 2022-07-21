/**
 * https://leetcode.com/problems/palindrome-partitioning/
 *
 * @param {string} s
 * @return {string[][]}
 */

var checkPalindrome = function (s) {
  let l = 0;
  r = s.length - 1;
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) return false;
    l++;
    r--;
  }
  return true;
};

var partition = function (s) {
  const final = [];
  const n = s.length;
  function dfs(start, path) {
    if (start === n) {
      final.push([...path]);
      return;
    }
    for (let i = start + 1; i < n + 1; i++) {
      const prefix = s.substring(start, i);
      if (checkPalindrome(prefix)) {
        path.push(prefix);
        dfs(i, path);
        path.pop();
      }
    }
  }
  dfs(0, []);
  return final;
};
