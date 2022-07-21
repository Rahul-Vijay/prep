// Given an integer, find its square root without using the built-in square root function. Only return the integer part (truncate the decimals).

// Input: 16

// Output: 4

// Input: 8

// Output: 2

// Explanation: square root of 8 is 2.83..., return integer part 2

function squareRoot(n) {
  let left = 0;
  let right = n;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid <= n) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

console.log(squareRoot(10));
