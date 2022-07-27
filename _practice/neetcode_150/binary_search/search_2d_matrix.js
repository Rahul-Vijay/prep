/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    // if last element of this array is greater
    // than target, apply bfs on that array
    if (matrix[i][matrix[i].length - 1] >= target) {
      let left = 0;
      let right = matrix[i].length - 1;
      while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (matrix[i][mid] === target) {
          found = true;
          left = mid + 1;
        } else if (matrix[i][mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return found;
};
