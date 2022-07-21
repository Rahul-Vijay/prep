function insertionSort(unsortedArray) {
  for (let i = 0; i < unsortedArray.length; ++i) {
    let currentPointer = i;
    while (
      currentPointer > 0 &&
      unsortedArray[currentPointer] < unsortedArray[currentPointer - 1]
    ) {
      let temp = unsortedArray[currentPointer];
      unsortedArray[currentPointer] = unsortedArray[currentPointer - 1];
      unsortedArray[currentPointer - 1] = temp;
      --currentPointer;
    }
  }
  return unsortedArray;
}

console.log(insertionSort([5, 3, 1, 2, 4, 2, 3, 1, 5]));
