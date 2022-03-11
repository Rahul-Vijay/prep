function merge(left, right) {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(unsortedArray) {
  let midpoint = unsortedArray.length / 2;
  if (unsortedArray.length < 2) return unsortedArray;
  const left = unsortedArray.splice(0, midpoint);
  return merge(mergeSort(left), mergeSort(unsortedArray));
}

console.log(mergeSort([5, 3, 1, 2, 4, 9, 2, 7, 3, 1, 2, 23, 12, 17, 23]));
