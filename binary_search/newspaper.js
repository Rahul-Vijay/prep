/*

You've begun working in the one and only Umbristan, and it is part of your job duty to organize newspapers. 
Every morning, your fellow coworkers will dilligently read through the newspapers to examine its contents. 
It is your job to organize the newspapers into piles and hand them out to your coworkers to read through.
Each newspaper is marked with the time it would take to read through its contents. 
The newspapers are carefully laid out in a line in a particular order that must not be broken 
when assigning the newspapers. You cannot pick and choose newspapers randomly from the line to 
assign to a co-worker. Instead, you must take newspapers from a particular subsection of the line, 
make a pile and give that to a co-worker.

What is the minimum amount of time it would take to have your coworkers go through all the newspapers?

Constraints
1 <= newspapers_read_times.length <= 10^5
1 <= newspapers_read_times[i] <= 10^5
1 <= num_coworkers <= 10^5

Examples
Example 1:
Input: newspapers_read_times = [7,2,5,10,8], num_coworkers = 2
Output: 18
Explanation:
Assign first 3 newspapers to one coworker then assign the rest to another. The time it takes for the first 3 newspapers is 7 + 2 + 5 = 14 and for the last 2 is 10 + 8 = 18.

Example 2:
Input: newspapers_read_times = [2,3,5,7], num_coworkers = 3
Output: 7
Explanation:
Assign [2, 3], [5], and [7] separately to workers. The minimum time is 7.

*/

function feasible(numCoworkers, maxTime, newspapersReadTimes) {
  let time = maxTime;
  let coworkers = 1;
  let i = 0;
  let n = newspapersReadTimes.length;
  while (i < n) {
    if (time >= newspapersReadTimes[i]) {
      time -= newspapersReadTimes[i];
      i++;
    } else {
      coworkers++;
      time = maxTime;
    }
  }
  return coworkers <= numCoworkers;
}

function newspapersSplit(newspapersReadTimes, numCoworkers) {
  let left = Math.max(...newspapersReadTimes);
  let right = newspapersReadTimes.reduce((a, b) => a + b, 0);
  let minTime = left;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (feasible(numCoworkers, mid, newspapersReadTimes)) {
      minTime = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minTime;
}

console.log(newspapersSplit([2, 3, 5, 7], 3));
