// https://leetcode.com/problems/time-based-key-value-store/

var TimeMap = function () {
  // initialize an empty object for storage
  this.keyValueStore = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  // if it doesn't exist make a new array
  if (!this.keyValueStore[key]) this.keyValueStore[key] = [];
  // store value along with timestamp
  this.keyValueStore[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let str = "";
  // find the key array in the keystore
  const arr = this.keyValueStore[key] || [];
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid][1] <= timestamp) {
      str = arr[mid][0];
      left = mid + 1;
    } else right = mid - 1;
  }

  return str;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
