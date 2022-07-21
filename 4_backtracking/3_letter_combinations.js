// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const KEYBOARD = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var dfs = function (path, digits, res) {
  if (path.length === digits.length) {
    res.push(path.join(""));
    return;
  }
  let next_number = digits.charAt(path.length);
  for (let letter of KEYBOARD[next_number]) {
    path.push(letter);
    dfs(path, digits, res);
    path.pop();
  }
};

var letterCombinations = function (digits) {
  if (digits === "") return [];
  const res = [];
  dfs([], digits, res);
  return res;
};
