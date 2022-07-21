function selectionSort(unsortedArray) {
  for (let i = 0; i < unsortedArray.length; ++i) {
    let minimumIndex = i;
    for (let j = i; j < unsortedArray.length; ++j) {
      if (unsortedArray[j] < unsortedArray[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let temp = unsortedArray[i];
    unsortedArray[i] = unsortedArray[minimumIndex];
    unsortedArray[minimumIndex] = temp;
  }
  return unsortedArray;
}

console.log(selectionSort([5, 3, 1, 2, 4, 7, 3, 1, 2, 9, 32, 21]));
