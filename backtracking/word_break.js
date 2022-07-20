// https://leetcode.com/problems/word-break/solution/

var wordBreak = function (s, wordDict) {
  const memo = {};
  function dfs(startIndex) {
    if (startIndex === s.length) return true;
    if (startIndex in memo) return memo[startIndex];
    let ok = false;
    for (const word of wordDict) {
      if (s.slice(startIndex).startsWith(word)) {
        if (dfs(startIndex + word.length)) {
          ok = true;
          break;
        }
      }
    }
    memo[startIndex] = ok;
    return ok;
  }
  return dfs(0);
};
