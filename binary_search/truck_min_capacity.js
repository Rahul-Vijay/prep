/*
There are n packages that needs to be transported from one city to another, and you need to 
transport them there within d days. For the ith package, the weight of the package is weights[i]. 
You are required to deliver them in order with a rental truck. The rental trucks come in different sizes. 
The bigger trucks have greater weight capacity but cost more to rent. To minimize cost, 
you want to deliver the packages in one truck once per day, with a weight capacity as small as 
possible to save on rental cost. What is the minimum weight capacity of the truck that is required to 
deliver all packages within d days?

Input
weights: A list of packages and their weights.
d: The number of days to deliver all packages.
Output
The minimum weight capacity of the truck.

Examples
Example 1:
Input:
weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
d = 5
Output: 15

Explanation:

The first day we deliver the first 5 package. The second day we deliver the next 2, and for each following days, we deliver 1. The maximum weight delivered on each day is 15, so we can have a truck with a capacity of 15. This value is the minimum.

Constraints
1 <= len(weights) <= 5 * 10^4
1 <= d <= len(weights)
1 <= weights[i] <= 500
*/

function feasible(d, maxWeight, weights) {
  let capacity = maxWeight;
  let days = 1;
  let i = 0;
  let n = weights.length;
  while (i < n) {
    if (capacity >= weights[i]) {
      capacity -= weights[i];
      i++;
    } else {
      days++;
      capacity = maxWeight;
    }
  }
  return days <= d;
}

function minMaxWeight(weights, d) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b, 0);
  let minCapacity = left;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (feasible(d, mid, weights)) {
      minCapacity = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minCapacity;
}

console.log(minMaxWeight([10, 20, 35, 42, 67, 73, 83, 99, 101], 6));
