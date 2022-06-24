function binarySearch(arr, number) {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor(right - left / 2);
    if (arr[mid] === number) return mid;
    if (arr[mid] < number) {
      // go right, shift left pointer to right
      left = mid + 1;
    } else {
      // go left, shift right pointer to left
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 6, 8, 9, 10], 1));
