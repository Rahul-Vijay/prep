/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binarySearch(rightBool) {
    // initialize as -1 to handle -
    // no target found case
    // empty array case
    let toFindIndex = -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        toFindIndex = mid;
        // if rightBool is true,
        // keep going left of mid
        // to find leftmost
        if (rightBool) {
          left = mid + 1;
        } else {
          // if rightBool is false,
          // keep going right of mid
          // to find rightmost
          right = mid - 1;
        }
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return toFindIndex;
  }
  return [binarySearch(false), binarySearch(true)];
};
