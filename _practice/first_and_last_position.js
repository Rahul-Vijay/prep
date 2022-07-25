/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function binarySearch(rightBool) {
    var toFindIndex = -1;
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        toFindIndex = mid;
        if (rightBool) {
          left = mid + 1;
        } else {
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

  const res = [];
  res.push(binarySearch(false));
  res.push(binarySearch(true));
  return res;
};
