function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) return false;
  else if (str1.length === 1) return true;
  const isomorphic = new Map();
  const char_set = new Set();
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  for (let i = 0; i < arr1.length; ++i) {
    if (isomorphic.has(arr1[i])) {
      // check if not same value
      if (isomorphic.get(arr1[i]) !== arr2[i]) return false;
    } else {
      if (char_set.has(arr2[i])) return false;
      isomorphic.set(arr1[i], arr2[i]);
      char_set.add(arr2[i]);
    }
  }
  return true;
}

console.log(isIsomorphic("wow", "axa"));
