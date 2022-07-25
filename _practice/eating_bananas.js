/**
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = 1;
  for (const pile of piles) {
    right = Math.max(pile, right);
  }
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    let eatingHours = 0;
    // calculate eating hours
    for (const pile of piles) {
      eatingHours += Math.ceil(pile / mid);
    }
    // check
    if (eatingHours <= h) {
      // could be max workspeed
      // so look before right again
      right = mid;
    } else {
      // if mid is not workable,
      // anything before mid is not workable
      // so go forward
      left = mid + 1;
    }
  }
  // left and right are same now
  return left;
};
