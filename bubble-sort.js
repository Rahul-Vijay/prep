function bubbleSort(unsortedArray) {
  for (let i = unsortedArray.length - 1; i >= 0; --i) {
    let swapped = false;

    for (let j = 0; j < i; ++j) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) return unsortedArray;
  }
  return unsortedArray;
}

console.log(bubbleSort([5, 3, 99, 21, 123, 111, 981, 1, 2, 4]));
