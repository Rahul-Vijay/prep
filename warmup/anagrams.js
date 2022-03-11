function sortedStr(str) {
  let s = str.split("");
  s = s.sort();
  return s.join("");
}

function groupAnagrams(strs) {
  const anagram_map = new Map();
  for (let i = 0; i < strs.length; ++i) {
    const ss = sortedStr(strs[i]);
    if (anagram_map.has(ss)) {
      const ar = anagram_map.get(ss);
      ar.push(strs[i]);
      anagram_map.set(ss, ar);
    } else {
      anagram_map.set(ss, [strs[i]]);
    }
  }
  return Array.from(anagram_map.values());
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
