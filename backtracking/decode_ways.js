/**
 * @param {string} s
 * @return {number}
 */

const LETTERS = Array.from(Array(26).keys(), (n) => (n + 1).toString(10));

var numDecodings = function (s) {
  if (s.startsWith("0")) return 0;
  function dfs(digits, startIndex, ways) {
    if (digits.length === startIndex) return 1;
    const remaining = digits.slice(startIndex);
    for (const letter in LETTERS) {
      if (remaining.startsWith(letter)) {
        ways += dfs(digits, startIndex + letter.length, ways);
      }
    }
    return ways;
  }
  return dfs(s, 0, 0);
};
